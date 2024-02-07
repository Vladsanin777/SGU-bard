import os
import json

def edit_js(list_s, line, doc_js):
    with open(doc_js, "r+") as f:
        lines = f.readlines()

        # Удаляем строку с номером line_number
        lines.pop(line)

        lines.insert(line, f"    return {list_s}\n")

        # Перезаписываем файл
        f.seek(0)
        f.writelines(lines)

def documents_update():
    l = {}  # Use a dictionary to store file structure
    for _i in os.listdir(path="documents"):
        p = {}  # Use a dictionary for each subfolder

        for _n in os.listdir(path=f"documents/{_i}"):
            p[_n] = os.listdir(path=f"documents/{_i}/{_n}")  # Assign files to subfolder key

        l[_i] = p  # Add subfolder with files to main dictionary


    print(f"Предварительно:\n{l}\nПредворительно///")  # Print JSON string

    # Assuming `edit_js` is a function to edit JavaScript files:
    edit_js(l, 1, "document_spisok.js")

    print(l)  # Print the final dictionary

def fons_update():
    edit_js(a := (os.listdir(path = "fons")), 1, "clik_logo.js")
    print(a)
def setup():
    pip = input()
    match pip:
        case "-d":
            documents_update()
            setup()
        case "-f":
            fons_update()
            setup()
        case "kl":
            pass
        case _:
            print("Такого ключа нет")
            setup()
setup()
#python edit.py

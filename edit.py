import os

def edit_document_js(list_s):
    with open("document_2.js", "r+") as f:
        lines = f.readlines()

        # Удаляем строку с номером line_number
        lines.pop(2)

        lines.insert(2, f"    return {list_s}\n")

        # Перезаписываем файл
        f.seek(0)
        f.writelines(lines)

def documents_update():
    l = []
    for _i in os.listdir(path="documents"):
        p = []
        for _n in os.listdir(path=f"documents/{_i}"):
            p.append([_n, os.listdir(path = f"documents/{_i}/{_n}")])
        l.append([_i, p])
    print(f"Предварительно:\n{l}\nПредворительно///")
    edit_document_js(l)
    print(l)


def setup():
    pip = input()
    match pip:
        case "-d":
            documents_update()
            setup()
        case "kl":
            pass
        case _:
            print("Такого ключа нет")
            setup()
setup()
#python edit.py

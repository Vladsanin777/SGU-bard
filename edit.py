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
        l.append([_i, os.listdir(path=f"documents/{_i}")])
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

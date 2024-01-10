class ALL {
  katalog() {
    return [['Устав', ['14.12.2018.pdf', '10.01.2020.pdf', '13.12.2021.pdf', '02.12.2022.pdf', '05.05.2023.pdf']], ['Лицензия на осуществление образовательной деятельности', ['Реестровая выписка.pdf']], ['Коллективный договор', ['Коллективный договор.pdf', 'Соглашение продлении коллективного договора.pdf']], ['Свидетельства об аккредитации', ['19.05.2017.pdf', 'Приложение №1 19.05.2017.pdf', 'Приложение №2 19.05.2017.pdf', 'Приложение №3.pdf']], ['План финансово-хозяйственной деятельности', ['За 2022-2023 год.pdf', 'За 2023-2024 год.pdf']], ['Предписания', ['Письмо Рособрнадзора от 02.02.2016.pdf', 'За 01.04.2015.pdf', 'За 24.11.2015.pdf']], ['Отчёты о самообследовании', ['За 2019 год.pdf', 'За 2022 год.pdf', 'За 2021 год.pdf', 'За 2020 год.pdf', 'За 23.04.2018 год.pdf']], ['Свединия о доходах', ['За 2012 год.pdf', 'За 2013 год.pdf', 'За 2014 год.pdf', 'За 2015 год.doc', 'За 2016 год.doc', 'За 2017 год.doc', 'За 2021-2022 годы.pdf', 'За 2021 год.docx', 'За 2022 год.docx', 'За 2019 год.docx', 'За 2018 год.docx']], ['Правила внутреннего трудового распорядка', ['Для всех студентов.pdf']], ['Отчёты об исполнении предписаний', ['От Рособрнадзора СГУ.pdf', 'Дополнение к отчету об исполнении предписания.pdf', 'Повторного предписания в части Балашовского института.pdf']], ['Режим занятий обучающихся', ['Для Колледжа Яблочкова.pdf', 'Для СГУ.pdf', 'Для Геологического колледжа.pdf']], ['Порядок расторжения договора об обучение в СГУ', ['Для всех студентов.pdf']], ['Формы, периодичность и порядок текущего контроля успеваемости и промежуточной аттестации обучающихся', ['Положение П 1.03.10 – 2022 о проведение текущего контроля успеваемости и промежуточной аттестации.pdf']], ['Положение о порядке перевода, восстановления и отчисления студентов', ['Для всех студентов.pdf']], ['Правила внутреннего распорядка обучающихся', ['Для всех студентов.pdf']], ['Правила приёма поступающих', ['Для всех остальных, от 06.06.23.pdf', 'Для колледжей.pdf']], ['Другие', ['Распоряжение Правительства РФ о присвоении СГУ новой категории.pdf', 'Отчет о результатах деятельности и использовании закрепленного имущества за 2022 год.pdf', 'Политика обработки персональных данных.pdf', 'Программа развития "Приоритет-2030".pdf', 'П 1.06.05 – 2022. Положение об электронной информационно-образовательной среде.pdf', 'Алгоритмы действий при эвакуации.pdf']], ['Отчёты о расходах на мироприятия СГУ', ['За 2015 год.pdf', 'За 2018 год.pdf', 'За 2019 год.pdf']], ['Образцы договоров для студентов среднего проф. образования', ['Достигнув 18 лет.pdf', 'Не достигнув 18 лет.pdf']], ['Показатели деятельности образовательной организации ВО, подлежащей самоосбледованию', ['За 2020 год.pdf', 'За 2022 год.pdf']], ['Стоимость обучения прием 1 курс для граждан РФ', ['СПО 2023-24 пр 171-В от 31.03.2023.pdf', 'ВО 2023-24 пр 169-В от 31.03.2023.pdf', 'Аспирантура 2023-2024 уч.год.pdf']], ['Стоимость обучения прием 1 курс для иностранцев', ['СПО 2023-24 пр 172-В от 31.03.2023 (иностранцы).pdf', 'ВО 2023-24 пр 170-В от 31.03.2023 (иностранцы)\n.pdf']], ['Стоимость обучения старшие курсы для граждан РФ', ['ВО 2023-24 пр 242-В от 28.04.2023.pdf', 'СПО 2023-24 пр 244-В от 28.04.2023.pdf', 'Аспирантура 2023-2024 пр 100-Д от 15.05.2023.pdf', 'Аспирантура 2-ой курс 2023-2024 уч. год.pdf']], ['Стоимость обучения старшие курсы для иностранцев', ['ВО 2023-24 пр 241-В от 28.04.2023 (иностранцы).pdf', 'СПО 2023-24 пр 245-В от 28.04.2023 (иностранцы).pdf']], ['Договор об образовании', ['3-х страничный для СПО.pdf', '3-х страничный для ВО.pdf', '2-х страничный для СПО.pdf', '2-х страничный для ВО.pdf']], ['Информация для студентов', ['Памятка абитуриенту.pdf']]]
  }

  h5_form_temn(h5_name) {
    const h5_1 = document.createElement('h5');
    h5_1.classList.add('new_univer_1');
    h5_1.textContent = h5_name;
    return h5_1;
  }

  button_temn(button_name, name_floader, documents_univer) {
    const nameFolder = name_floader;
    const buttonName = button_name;
    const documentsUniver = documents_univer;
    const button_file = document.createElement('button');
    button_file.classList.add('new_univer_op_b');
    button_file.textContent = button_name;
    button_file.addEventListener('click', () => {
      location.href = 'documents/' documentsUniver + '/' + nameFolder + '/' + buttonName;
    });
    return button_file;
  }

  div_form_ayrc_2(name_floader_files, name_documents) {
    const div_papca = document.createElement('div');
    div_papca.classList.add('new_univer_op');
    for (const file of name_floader_files[1]) {
      div_papca.appendChild(this.button_temn(file,  name_floader_files[0], name_documents));
    }
    return div_papca;
  }

  h5_form_ayrc(name_floader) {
    const h5_1 = document.createElement('h5');
    h5_1.classList.add('new_univer_1236');
    h5_1.textContent = name_floader;
    return h5_1;
  }

  div_form_temn(name_floader_files, name_documents) {
    const div_papca = document.createElement('div');
    div_papca.classList.add('new_univer_15');
    div_papca.appendChild(this.h5_form_ayrc(name_floader_files[0]));
    div_papca.appendChild(this.div_form_ayrc_2(name_floader_files, name_documents));

    return div_papca;
  }

  div_form_ayrc(name_documents) {
    const div_papca = document.createElement('div');
    div_papca.appendChild(this.h5_form_temn(name_documents[0]));
    div_papca.classList.add('new_univer_155');

    for (const name_floader_files of name_documents[1]) {
      const div_child = this.div_form_temn(name_floader_files, name_documents[0]);
      div_papca.appendChild(div_child);
    }

    const div_papca_1 = document.createElement('div');
    div_papca_1.appendChild(div_papca);
    div_papca_1.classList.add('new_univer');

    const div_papca_2 = document.createElement('div');
    div_papca_2.appendChild(div_papca_1);
    div_papca_2.classList.add('new_inst');

    // Последний `return` должен быть этим
    return div_papca_2;
  }
  setup_group(){
    const div_papca = document.createElement('div');
    div_papca.classList.add('u1200u');
    for (let i of this.katalog()){
      div_papca.appendChild(this.div_form_ayrc(i));
    }
  }
  div_setup_final() {
    const div = this.setup_group();
    document.body.appendChild(div);
  }
}

const i = new ALL();
i.div_setup();

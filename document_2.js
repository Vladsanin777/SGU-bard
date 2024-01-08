class ALL {
  katalog() {
    return [['kjjhh', ['xzcv', 'sdfGF', 'gxcgs']], ['jixzcvbio', ['xfbko m', 'vbjhn']]];
  }

  h5_form_temn(h5_name) {
    const h5_1 = document.createElement('h5');
    h5_1.classList.add('new_univer_1');
    h5_1.textContent = h5_name;
    return h5_1;
  }

  button_temn(button_name) {
    const button_file = document.createElement('button');
    button_file.classList.add('new_univer_op_b');
    button_file.textContent = button_name;
    return button_file;
  }

  div_form_ayrc_2(name_files) {
    const div_papca = document.createElement('div');
    div_papca.classList.add('new_univer_op');
    for (const file of name_files) {
      div_papca.appendChild(this.button_temn(file));
    }
    return div_papca;
  }

  h5_form_ayrc(name_floader) {
    const h5_1 = document.createElement('h5');
    h5_1.classList.add('new_univer_1236');
    h5_1.textContent = name_floader;
    return h5_1;
  }

  div_form_temn(name_floader_files) {
    const div_papca = document.createElement('div');
    div_papca.classList.add('new_univer_15');
    div_papca.appendChild(this.h5_form_ayrc(name_floader_files[0]));
    div_papca.appendChild(this.div_form_ayrc_2(name_floader_files[1]));

    return div_papca;
  }

  div_form_ayrc() {
    const div_papca = document.createElement('div');
    div_papca.appendChild(this.h5_form_temn("Документы СГУ")); // Только вызываем h5_form_temn один раз
    div_papca.classList.add('new_univer_155');
    for (const name_floader_files of this.katalog()) {
      const div_child = this.div_form_temn(name_floader_files);
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

  div_setup() {
    const div = this.div_form_ayrc();
    document.body.appendChild(div);
  }
}

const i = new ALL();
i.div_setup();

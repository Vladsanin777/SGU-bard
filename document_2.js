class ALL {
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
      location.href = 'documents/' + documentsUniver + '/' + nameFolder + '/' + buttonName;
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
    const div_papca_1 = document.createElement('div');
    div_papca_1.classList.add('new_ind');


    for (const name_floader_files of name_documents[1]) {
      const div_child = this.div_form_temn(name_floader_files, name_documents[0]);
      div_papca_1.appendChild(div_child);
    }



    const div_papca = document.createElement('div');
    div_papca.appendChild(this.h5_form_temn(name_documents[0]));
    div_papca.classList.add('new_inst');
    div_papca.appendChild(div_papca_1)
    // Последний `return` должен быть этим
    return div_papca;
  }
  setup_group(){
    const div_papca = document.createElement('div');
    div_papca.classList.add('u1200u');
    for (let i of katalog()){
      div_papca.appendChild(this.div_form_ayrc(i));
    }
    return div_papca
  }
  div_setup_final() {
    const div = this.setup_group();
    document.body.appendChild(div);
  }
}
i = new ALL
i.div_setup_final()

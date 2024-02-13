class ALL_1 {
  button_temn(button_name) {
    const buttonName = button_name;
    const button_file = document.createElement('button');
    button_file.classList.add('new_univer_op_b');
    button_file.textContent = button_name;
    button_file.addEventListener('click', () => {
      const divs = document.querySelectorAll(".new_inst")
      for ( let group of divs){
        group.parentNode.removeChild(group)
      }
      (new ALL_2).div_setup_final(button_name)
      smenadizaina_1()
      resizeWindow()
      resizeWindow_2()
    });
    return button_file;
  }
  setup_group(){
    const div_papca = document.createElement('div');
    div_papca.classList.add('div_all_class_document');
    for (let i of Object.keys(katalog())){
      div_papca.appendChild(this.button_temn(i));
    }
    return div_papca
  }
  setup_div_final(){
    const div = this.setup_group();
    const div_1 = document.createElement('div');
    div_1.classList = "osnova_document"
    div_1.appendChild(div)
    document.body.appendChild(div_1);
  }
}
(new ALL_1).setup_div_final()


class ALL_2 {
  h5_form_temn(h5_name) {
    const h5_1 = document.createElement('h1');
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
    const a_file = document.createElement('a');
    a_file.href = 'documents/' + documentsUniver + '/' + nameFolder + '/' + buttonName;
    a_file.appendChild(button_file)
    return a_file;
  }

  div_form_ayrc_2(name_floader_files, name_documents, nameFolder) {
    const div_papca = document.createElement('div');
    div_papca.classList.add('new_univer_op');
    for (const file of name_floader_files) {
      div_papca.appendChild(this.button_temn(file, nameFolder, name_documents));
    }
    return div_papca;
  }

  h5_form_ayrc(name_floader) {
    const h5_1 = document.createElement('h2');
    h5_1.classList.add('new_univer_1236');
    h5_1.textContent = name_floader;
    return h5_1;
  }

  div_form_temn(name_floader_files, name_floader, name_documents) {
    const div_papca = document.createElement('div');
    div_papca.classList.add('new_univer_15');
    div_papca.appendChild(this.h5_form_ayrc(name_floader));
    div_papca.appendChild(this.div_form_ayrc_2(name_floader_files, name_documents, name_floader,));

    return div_papca;
  }

  div_form_ayrc(div_start, name_documents) {
    const div_papca_1 = document.createElement('div');
    div_papca_1.classList.add('new_ind');


    for (const name_floader in name_documents) {
      const div_child = this.div_form_temn(name_documents[name_floader], name_floader, div_start);
      div_papca_1.appendChild(div_child);
    }



    const div_papca = document.createElement('div');
    div_papca.appendChild(this.h5_form_temn(div_start));
    div_papca.classList.add('new_inst');
    div_papca.appendChild(div_papca_1)
    // Последний `return` должен быть этим
    return div_papca;
  }
  div_setup_final(div_start) {
    document.querySelector(".osnova_document").appendChild(this.div_form_ayrc(div_start, katalog()[div_start]));
  }
}
(new ALL_2).div_setup_final("Основные документы СГУ")

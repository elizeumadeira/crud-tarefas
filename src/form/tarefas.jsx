import React, { Component } from 'react';
import axios from 'axios';

import PageHeader from '../template/pageHeader';
import ListForm from './listForm';
import IconButton from '../template/iconButton';
import EditForm from './editForm';
import config from '../config';
// const URL = 'http://localhost:8000/tarefas'

export default class Tarefas extends Component {
    constructor(props) {
        //envia as propriedades para a classe pai
        super(props);

        //estado da classe
        this.state = {
            list: [],
            add: false,
            tarefa: null
        }

        //joga o this da classe para os métodos
        this.handleChange = this.handleChange.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
        this.handleInsert = this.handleInsert.bind(this);
        this.openEdit = this.openEdit.bind(this);
        this.add = this.add.bind(this);
        this.cancelar = this.cancelar.bind(this);

        //chama o metodo para inicializar a lista populada
        this.refresh();
    }

    refresh() {
        axios.get(config.URL)
            .then(resp => this.setState(...this.state, { list: resp.data }));
    }

    handleChange(e, campo) {
        const ta = { ...this.state.tarefa };
        ta[campo] = e.target.value;
        this.setState(...this.state, { tarefa: ta });
    }

    add() {
        this.setState(...this.state, { tarefa: null, add: true });
    }

    cancelar() {
        this.setState(...this.state, { tarefa: null, add: false });
        this.refresh();
    }

    openEdit(todo) {
        this.setState(...this.state, { tarefa: todo, add: false });
    }

    handleRemove(todo) {
        axios.delete(`${config.URL}/${todo.id}`)
        .then(this.cancelar);
    }

    handleEdit(todo) {
        axios.put(`${config.URL}/${todo.id}`, { ...todo })
            .then(this.cancelar);
    }

    handleInsert(todo) {
        axios.post(`${config.URL}`, { ...todo })
            .then(this.cancelar);
    }

    render() {
         console.log(this.state.tarefa === null , this.state.add);
        if (this.state.tarefa === null && !this.state.add) {
            return (<div>
                <PageHeader name="Tarefas" small="Cadastro"></PageHeader>
                <IconButton style='success' icon='pencil' text='Adicionar' onClick={this.add} />
                <ListForm
                    list={this.state.list}
                    handleRemove={this.handleRemove}
                    handleEdit={this.handleEdit}
                    openEdit={this.openEdit}
                />
            </div>
            );
        } else {
            return (
                <div>
                    <PageHeader name="Cadastrar"></PageHeader>
                    <EditForm
                        tarefa={this.state.tarefa === null ? {} : this.state.tarefa}
                        add={this.state.add}
                        handleChange={this.handleChange}
                        cancelar={this.cancelar}
                        handleInsert={this.handleInsert}
                        handleEdit={this.handleEdit}
                    />
                </div>
            );
        }
    }
}
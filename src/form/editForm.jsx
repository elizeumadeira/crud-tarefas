import React from 'react';
import Grid from '../template/grid';
import IconButton from '../template/iconButton';
import If from '../template/if';

export default props => {
    console.log(props.tarefa);
    return (
        <div role='form' className="todoForm">
            <Grid cols="12">
                <div className='form-group'>
                    <label>Titulo</label>
                    <input id="titulo" className="form-control" value={props.tarefa.titulo} onChange={(e) => props.handleChange(e, 'titulo')} />
                </div>
                <div className='form-group'>
                    <label>Descrição</label>
                    <input id="descricao" className="form-control" value={props.tarefa.descricao} onChange={(e) => props.handleChange(e, 'descricao')} />
                </div>
                <div className='form-group'>
                    <label>Prioridade</label>
                    <select id="prioridade" className="form-control" onChange={(e) => props.handleChange(e, 'prioridade')}>
                        <option value="1">Baixa</option>
                        <option value="2">Média</option>
                        <option value="3">Alta</option>
                    </select>
                </div>
            </Grid>

            <Grid cols="12">
                <If test={props.add}>
                    <IconButton style='success' icon='plus' onClick={() => props.handleInsert(props.tarefa) } text='Adicionar'></IconButton>
                </If>
                <If test={!props.add}>
                    <IconButton style='success' icon='plus' onClick={() => props.handleEdit(props.tarefa)} text='Editar'></IconButton>
                </If>
                <IconButton style='danger' icon='close' onClick={props.cancelar} text='Cancelar'></IconButton>
            </Grid>
        </div>
    )
}
import React from 'react';
import IconButton from '../template/iconButton';

export default props => {
    const renderRows = () => {
        const lista = props.list || [];

        return lista.map(todo => (
            <tr key={todo.id}>
                <td>{todo.titulo}</td>
                <td>{todo.descricao}</td>
                <td>{todo.prioridade}</td>
                <td>
                    <IconButton style='warning' icon='pencil' onClick={() => props.openEdit(todo)}  />
                    <IconButton style='danger' icon='trash-o' onClick={() => props.handleRemove(todo)} />
                </td>
            </tr>
        ));
    }
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Tarefa</th>
                    <th>Descrição</th>
                    <th>Prioridade</th>
                    <th className="tableActions">Ações</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}


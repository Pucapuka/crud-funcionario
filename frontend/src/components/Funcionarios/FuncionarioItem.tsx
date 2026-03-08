import React from "react";
import type { Funcionario } from "../../types/funcionario.types";

interface Props {
    funcionario: Funcionario;
    onDelete: (id: string) => void;
    onEdit?: (funcionario: Funcionario) => void;
}

const FuncionarioItem: React.FC<Props> = ({funcionario, onDelete, onEdit}) => {
    const formatarData = (dataString: string) => {
        return new Date(dataString).toLocaleDateString('pt-BR');
    }

    return (
        <li style={styles.item}>
            <div style={styles.info}>
                <h3>{funcionario.nome}</h3>
                <p>
                    <strong>Idade:</strong> {funcionario.idade} | {' '}
                    <strong>Função:</strong> {funcionario.funcao} | {' '}
                    <strong>Contratado em:  </strong> {formatarData(funcionario.contratado_em)}
                </p>
            </div>
            <div style={styles.actions}>
                {onEdit && (
                    <button onClick={() => onEdit(funcionario)} style={styles.editButton}>
                        Editar
                    </button>
                )}
                <button onClick={() => onDelete(funcionario.id)} style={styles.deleteButton}>
                    Excluir
                </button>
            </div>
        </li>
    );
}

const styles = {
    item: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '15px',
        border: '1px solid #ddd',
        borderRadius: '8px',
        marginBottom: '10px',
        backgroundColor: 'white' 
    },
    info: {
        flex: 1
    },
    actions: {
        display: 'flex',
        gap: '10px'
    },
     deleteButton: {
        padding: '5px 15px',
        backgroundColor: '#ff4444',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer'
    },
    editButton: {
        padding: '5px 15px',
        backgroundColor: '#ffbb33',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer'
    }
}

export default FuncionarioItem;




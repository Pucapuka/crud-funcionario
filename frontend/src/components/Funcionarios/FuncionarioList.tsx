import FuncionarioItem from "./FuncionarioItem";
import type { Funcionario } from "../../types/funcionario.types";

interface Props {
    funcionarios: Funcionario [];
    onDelete: (id: string) => void;
    onEdit?: (funcionario: Funcionario) => void;
    loading?: boolean;
    error?: string | null;    
}

const FuncionarioList : React.FC<Props> = ({
    funcionarios,
    onDelete,
    onEdit,
    loading,
    error
}) => {
    if(loading) return <div style={styles.center}>Carregando funcionários...</div>;
    if(error) return <div style={styles.center}>Erro: {error}</div>
    if(funcionarios.length === 0){
        return <div style={styles.center}>Nenhum funcionário cadastrado.</div>;
    }

    return (
        <div>
            <h2>Lista de Funcionários({funcionarios.length})</h2>
            <ul style={styles.list}>
                {funcionarios.map(func => (
                    <FuncionarioItem 
                        key={func.id}
                        funcionario={func}
                        onDelete={onDelete}
                        onEdit={onEdit}
                    />
                ))}
            </ul>
        </div>
    )
}

const styles ={
    list: {
        listStyle: 'none',
        padding: 0,
        margin: 0,
        color: '#3a3a3a'
    },
    center: {
        textAlign: 'center' as const,
        padding: '40px',
        color: '#666'
    }
}

export default FuncionarioList;
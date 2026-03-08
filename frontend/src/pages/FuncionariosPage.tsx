import React, {useState} from "react";
import { useFuncionario } from "../hooks/useFuncionario";
import FuncionarioList from "../components/Funcionarios/FuncionarioList";
import FuncionarioForm from "../components/Funcionarios/FuncionarioForm";
import type { Funcionario } from "../types/funcionario.types";

const FuncionariosPage: React.FC = () => {
    const {
        funcionarios,
        loading,
        error,
        adicionarFuncionario,
        removerFuncionario
    } = useFuncionario();

    const [mostrarForm, setMostrarForm] = useState(false);
    const [funcionarioEditando, setFuncionarioEditando] = useState<Funcionario | null>(null);

    const handleAdicionar = async (dados: any) => {
        await adicionarFuncionario(dados);
        setMostrarForm(false);
    }

    const handleEditar = (funcionario: Funcionario) => {
        setFuncionarioEditando(funcionario);
        setMostrarForm(true);
    }

    return (
        <div style={styles.container}>
            <header style={styles.header}>
                <h1>Gestão de Funcionários</h1>
                <button
                    onClick={() => setMostrarForm(!mostrarForm)}
                    style={styles.toggleButton}    
                >
                    {mostrarForm? 'Fechar Formulário' : 'Novo Funcionário'}
                </button>
            </header>

            {mostrarForm && (
                <FuncionarioForm
                    onAdicionar={handleAdicionar}
                    onCancel={() => setMostrarForm(false)}
                />
            )}

            <FuncionarioList
                funcionarios={funcionarios}
                onDelete={removerFuncionario}
                onEdit={handleEditar}
                loading={loading}
                error={error}
            />
        </div>
    )
} 

const styles = {
    container: {
        maxWidth: '800px',
        margin: '0 auto',
        padding: '20px'
    },
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '20px'
    },
    toggleButton: {
        padding: '10px 20px',
        backgroundColor: '#0066cc',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer'
    }
};

export default FuncionariosPage;
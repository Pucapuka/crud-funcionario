import React, { useState } from 'react';
import type { FuncionarioInput } from '../../types/funcionario.types';

interface Props {
    onAdicionar: (dados: FuncionarioInput) => Promise<void>;
    onCancel?: () => void;
}

const FuncionarioForm: React.FC<Props> = ({ onAdicionar, onCancel }) => {
    const [formData, setFormData] = useState({
        nome: '',
        idade: '',
        funcao: '',
        contratado_em: ''
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        
        try {
            await onAdicionar({
                nome: formData.nome,
                idade: Number(formData.idade),
                funcao: formData.funcao,
                contratado_em: formData.contratado_em
            });
            
            
            setFormData({ nome: '', idade: '', funcao: '', contratado_em: '' });
            alert('Funcionário cadastrado com sucesso!');
        } catch (error) {
            alert('Erro ao cadastrar');
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} style={styles.form}>
            <h2>Cadastrar Funcionário</h2>
            
            <div style={styles.field}>
                <label>Nome:</label>
                <input
                    type="text"
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    required
                    style={styles.input}
                />
            </div>

            <div style={styles.field}>
                <label>Idade:</label>
                <input
                    type="number"
                    name="idade"
                    value={formData.idade}
                    onChange={handleChange}
                    required
                    min="18"
                    max="100"
                    style={styles.input}
                />
            </div>

            <div style={styles.field}>
                <label>Função:</label>
                <input
                    type="text"
                    name="funcao"
                    value={formData.funcao}
                    onChange={handleChange}
                    required
                    style={styles.input}
                />
            </div>

            <div style={styles.field}>
                <label>Data de Contratação:</label>
                <input
                    type="date"
                    name="contratado_em"
                    value={formData.contratado_em}
                    onChange={handleChange}
                    required
                    style={styles.input}
                />
            </div>

            <div style={styles.buttons}>
                <button type="submit" disabled={loading} style={styles.submitButton}>
                    {loading ? 'Salvando...' : 'Cadastrar'}
                </button>
                {onCancel && (
                    <button type="button" onClick={onCancel} style={styles.cancelButton}>
                        Cancelar
                    </button>
                )}
            </div>
        </form>
    );
};

const styles = {
    form: {
        maxWidth: '500px',
        margin: '20px auto',
        padding: '20px',
        border: '1px solid #ddd',
        borderRadius: '8px',
        backgroundColor: '#f9f9f9'
    },
    field: {
        marginBottom: '15px'
    },
    input: {
        width: '100%',
        padding: '8px',
        marginTop: '5px',
        border: '1px solid #ccc',
        borderRadius: '4px'
    },
    buttons: {
        display: 'flex',
        gap: '10px',
        justifyContent: 'center'
    },
    submitButton: {
        padding: '10px 20px',
        backgroundColor: '#4CAF50',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer'
    },
    cancelButton: {
        padding: '10px 20px',
        backgroundColor: '#f44336',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer'
    }
};

export default FuncionarioForm;
import React from 'react';
import { useDados } from '../../Context/Dados';
import { Edit2, Trash2, Plus } from 'lucide-react';
import './Cargos.css';

const JobPositions = () => {
  const { cargos, theme } = useDados();

  return (
    <div className={`job-positions ${theme}`}>
      <h2 className="section-title">Cargos</h2>
      <button className="add-job-btn">
        <Plus size={20} />
        Adicionar Cargo
      </button>
      <div className="job-grid">
        {cargos.map((cargo) => (
          <div key={cargo.id} className="job-card">
            <h3 className="job-title">{cargo.titulo}</h3>
            <p className="job-description">{cargo.descricao}</p>
            <div className="job-details">
              <span className="job-salary">Salário: R$ {cargo.salario}</span>
              <span className="job-department">Departamento: {cargo.departamento}</span>
            </div>
            <div className="job-actions">
              <button className="edit-btn">
                <Edit2 size={18} />
                Editar
              </button>
              <button className="delete-btn">
                <Trash2 size={18} />
                Excluir
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobPositions;
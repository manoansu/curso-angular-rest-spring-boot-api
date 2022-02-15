package pt.amane.cursoangularrestspringbootapi.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import pt.amane.cursoangularrestspringbootapi.model.Lancamento;
import pt.amane.cursoangularrestspringbootapi.repositories.lancamentos.LancamentoRepositoryQuery;

@Repository
public interface LancamentoRepository extends JpaRepository<Lancamento, Long>, LancamentoRepositoryQuery {

}

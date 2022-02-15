package pt.amane.cursoangularrestspringbootapi.repositories.lancamentos;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import pt.amane.cursoangularrestspringbootapi.model.Lancamento;
import pt.amane.cursoangularrestspringbootapi.repositories.filters.LancamentoFilter;
import pt.amane.cursoangularrestspringbootapi.repositories.projections.ResumoLancamento;

public interface LancamentoRepositoryQuery {

	public Page<Lancamento> filtrar(LancamentoFilter lancamentoFilter, Pageable pageable);
	public Page<ResumoLancamento> resumir(LancamentoFilter lancamentoFilter, Pageable pageable);
}

package pt.amane.cursoangularrestspringbootapi.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import pt.amane.cursoangularrestspringbootapi.entities.Lancamento;
import pt.amane.cursoangularrestspringbootapi.entities.Pessoa;
import pt.amane.cursoangularrestspringbootapi.repositories.LancamentoRepository;
import pt.amane.cursoangularrestspringbootapi.repositories.PessoaRepository;
import pt.amane.cursoangularrestspringbootapi.services.exceptions.PessoaInexistenteOuInativaException;

@Service
public class LancamentoService {
	
	@Autowired
	private PessoaRepository pessoaRepository;
	
	@Autowired 
	private LancamentoRepository lancamentoRepository;

	public Lancamento salvar(Lancamento lancamento) {
		Optional<Pessoa> pessoa = pessoaRepository.findById(lancamento.getPessoa().getCodigo());
		if (pessoa.isEmpty() || pessoa.get().isInativo()) {
			throw new PessoaInexistenteOuInativaException();
		}
		
		return lancamentoRepository.save(lancamento);
	}
}

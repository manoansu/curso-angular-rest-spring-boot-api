package pt.amane.cursoangularrestspringbootapi.services;

import java.util.Optional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import pt.amane.cursoangularrestspringbootapi.model.Lancamento;
import pt.amane.cursoangularrestspringbootapi.model.Pessoa;
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

	public Lancamento atualizar(Long codigo, Lancamento lancamento) {
		Lancamento lancamentoSalvo = buscarLancamentoExistente(codigo);
		if (!lancamento.getPessoa().equals(lancamentoSalvo.getPessoa())) {
			validarPessoa(lancamento);
		}

		BeanUtils.copyProperties(lancamento, lancamentoSalvo, "codigo");

		return lancamentoRepository.save(lancamentoSalvo);
	}

	private void validarPessoa(Lancamento lancamento) {
		Optional<Pessoa> pessoa = null;
		if (lancamento.getPessoa().getCodigo() != null) {
			pessoa = pessoaRepository.findById(lancamento.getPessoa().getCodigo());
		}

		if (pessoa.isEmpty() || pessoa.get().isInativo()) {
			throw new PessoaInexistenteOuInativaException();
		}
	}

	private Lancamento buscarLancamentoExistente(Long codigo) {
/* 		Optional<Lancamento> lancamentoSalvo = lancamentoRepository.findById(codigo);
		if (lancamentoSalvo.isEmpty()) {
			throw new IllegalArgumentException();
		} */
		return lancamentoRepository.findById(codigo).orElseThrow(() -> new IllegalArgumentException());
	}	
}

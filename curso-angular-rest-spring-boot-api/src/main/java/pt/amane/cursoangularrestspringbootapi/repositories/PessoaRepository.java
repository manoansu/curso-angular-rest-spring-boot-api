package pt.amane.cursoangularrestspringbootapi.repositories;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import pt.amane.cursoangularrestspringbootapi.model.Pessoa;

@Repository
public interface PessoaRepository extends JpaRepository<Pessoa, Long>{

	public Page<Pessoa> findByNomeContaining(String nome, Pageable pageable);
}

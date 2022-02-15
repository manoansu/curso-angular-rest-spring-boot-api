package pt.amane.cursoangularrestspringbootapi.securities;

import java.util.Collection;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.User;

import pt.amane.cursoangularrestspringbootapi.model.Usuario;

public class UsuarioSistema extends User {
    private static final long serialVersionUID = 1L;

	private Usuario usuario;

	public UsuarioSistema(Usuario usuario, Collection<? extends GrantedAuthority> authorities) {
		super(usuario.getEmail(), usuario.getSenha(), authorities);
		this.usuario = usuario;
	}

	public Usuario getUsuario() {
		return usuario;
	}
}


package com.web.curation.dao.user;

import java.util.List;
import java.util.Optional;

import com.web.curation.model.user.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserDao extends JpaRepository<User, String> {
	
//	User getUserByEmail(String email);


	User getUserByNickname(String nickname);

	Optional<User> findUserByEmailAndPassword(String email, String password);

	List<User> findByNicknameContaining(String nickname);
}

# ✨ 프로젝트 개요

-  **협업규칙**
   -  1일 1커밋, 1주 1MR(Merge Request) 1인 프로젝트라도 master 브랜치에서 작업하지 말자(연습)
   -  Jira 이슈 관리
   -  Sub1은 개인프로젝트이지만 팀으로 대응!! (이슈 발생 시 팀원 공유)
   -  gitlab > README.md 정리 중요!!
   -  Sub1 기간 => 차주 팀프로젝트 준비(기획, 프로젝트 규칙 등)
-  **이번 Sprint 목표**
   -  sub1 프로젝트 구현(README.md에 내용 정리 포함)
   -  팀 프로젝트를 위한 도구 연습. Gitlab, Jira 등
   -  팀프로젝트 개발 환경 구축
   -  React에 대한 전반적인 학습(개요 수준!)



# ⚙️ Install and Usage

### Frontend

- frontend 폴더로 들어와 필요한 패키지를 설치합니다.

  ```bash
  yarn
  ```

- frontend app을 실행합니다.

  ```bash
  yarn start
  ```




### Backend

- Java (Open JDK 14)를 설치합니다.
- Maven을 설치합니다.
  - VSCode에서 Maven 하단의 webcuration에서 우클릭 후 install
- VS Code에서 Spring Boot Extension Pack 설치합니다.
- Docker를 설치합니다.

> Maria DB 컨테이너 실행

- `docker run --name-db -p 3306:3306 -e MYSQL_ROOT_PASSWORD={패스워드} -d mariddb`
  - 패스워드를 칠 때는, 대괄호를 지우고 칩니다.
- `docker exec -it maria-db mysql -u root -p`
  - docker를 켜고, maria-db를 실행하기 위한 코드입니다.

> DB 테이블 생성

- DB 테이블을 생성합니다.

> backend 앱을 실행합니다.

- `./mvnw spring-boot:run`

# 🏠 주요 기능

**로그인 기능**

> F로그인 페이지

- 모바일에서 입력 시 이메일 Input의 첫 글자가 대문자가 되는 현상으로 인해 로그인 실패가 발생하지 않도록 구현
- 로그인 실패 시 사용자에게 에러메시지 노출
- 이메일 형식 입력 및 비밀번호 입력 기준 충족 시에만 '로그인 버튼 활성화'

![image-20210115105021071](README.assets/image-20210115105021071.png)



**회원 관리**

> 회원가입 페이지

- 가입 필수 항목 모두 입력 시에만 '가입 완료' 버튼 활성화
- 이메일 형식 입력 및 비밀번호 입력 기준 충족 못할 시 오류 메시지 노출
- 모바일에서 입력 시 이메일 Input의 첫 글자가 대문자가 되는 현상으로 인해 로그인 실패가 발생하지 않도록 구현
- 회원가입 완료 후 회원가입 인증 메일이 발송되었습니다. 이메일을 확인해주세요 메세지 출력
- 메일 재발송, 메일함으로 이동 등 사용자 편의 사항을 고려한 버튼 등을 적용

![image-20210115110729125](README.assets/image-20210115110729125.png)

**비밀번호 변경 페이지 제작**

- 비밀번호 입력 기준이 충족되었을 때, '저장' 버튼 활성화
- 비밀번호 변경 성공 시 사용자에게 피드백 노출
- 비밀번호 변경 실패 시 에러 메시지 노출
![image-20210115105359093](README.assets/image-20210115105359093.png)

**Page Not Found 페이지** 

- 존재하지 않는 요청 시 Page Not Found 페이지로 이동

![image-20210115110751476](README.assets/image-20210115110751476.png)

**Error 페이지**

- 웹 페이지에 오류가 발생하는 경우 Error 페이지로 이동

![image-20210115110814416](README.assets/image-20210115110814416.png)




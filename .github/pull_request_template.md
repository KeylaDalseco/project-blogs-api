# Projeto API de Blogs

## O que vou desenvolver?

Você vai desenvolver uma API e um banco de dados para a produção de conteúdo para um blog! Para isso, desenvolverá uma aplicação em Node.js usando o pacote sequelize para fazer um CRUD de posts.

Neste projeto você irá:

- Desenvolver endpoints que estarão conectados ao seu banco de dados seguindo os princípios do REST;
- Trabalhar a relação user e post, visto que para fazer um post é necessário usuário e login
- Trabalhar a relação de posts para categories e de categories para posts, visto que será necessária a utilização categorias para os posts.

## Missão essencial

- [X] PR aberto para entrega do projeto API de Blogs

## O que preciso saber para fazer o projeto?

- [ ] Entender o conceito de Migrations
- [ ] Entender o conceito de Model
- [ ] Entender o conceito de Seeders
- [ ] Entender relacionamentos 1:N
- [ ] Entender relacionamentos N:N
- [ ] Entender como criar uma rota com JWT

## Habilidades para o projeto

### _Vão ser necessárias para realização do projeto_

- [ ] [Dia 01: ORM - Interface da aplicação com o banco de dados](https://app.betrybe.com/learn/course/5e938f69-6e32-43b3-9685-c936530fd326/module/94d0e996-1827-4fbc-bc24-c99fb592925b/section/0ca77b1d-4770-4646-8368-167d2305e763/day/0da9bd44-abf6-43d6-96b9-9614274e6c36/lesson/f0806ecc-6ea9-45e1-9c81-b92a60db9b6b)
- [ ] [Dia 02: ORM - Associations 1:1 e 1:N](https://app.betrybe.com/learn/course/5e938f69-6e32-43b3-9685-c936530fd326/module/94d0e996-1827-4fbc-bc24-c99fb592925b/section/0ca77b1d-4770-4646-8368-167d2305e763/day/94e113d7-6a86-4536-a1d3-08f55f557811/lesson/1f2a47c4-5a3c-411c-89cd-27190966915e)
- [ ] [Dia 03: ORM - Associations N:N e Transactions](https://app.betrybe.com/learn/course/5e938f69-6e32-43b3-9685-c936530fd326/module/94d0e996-1827-4fbc-bc24-c99fb592925b/section/0ca77b1d-4770-4646-8368-167d2305e763/day/22fa9643-5f27-41f5-943b-2c7cc1c67c01/lesson/be289f53-bd25-4a5f-817e-1770bbf006b4)
- [ ] [Dia 04: JWT - (JSON Web Token)](https://app.betrybe.com/learn/course/5e938f69-6e32-43b3-9685-c936530fd326/module/94d0e996-1827-4fbc-bc24-c99fb592925b/section/0ca77b1d-4770-4646-8368-167d2305e763/day/85fd2ed3-f6cc-4789-8990-7f5fe827422c/lesson/c93a3302-ddd6-4927-8c09-bf5307b5c492)

### Conteúdos de Soft Skills
- [ ] Aprenda melhor, não mais: neste [vídeo](https://www.youtube.com/watch?v=zPXhXfA2GEY) Seiiti Arata, educador e especialista em aprendizado acelerado, compartilha princípios e técnicas para transformar o tempo em seu melhor amigo na jornada de aprendizagem.
- [ ] Não é mistério que a inteligência emocional contribui - e muito - para a eficácia da resolução de problemas em programação. [Neste artigo](https://blog.escolaconquer.com.br/as-8-dicas-infaliveis-para-controle-emocional) você confere 8 dicas para fortalecer essa habilidade.
- [ ] Na "era da produtividade", não é incomum enfrentarmos preocupações constantes em nossa vida pessoal e profissional. Se essa realidade soa familiar para você, não se preocupe. O Zenklub oferece um [conteúdo](https://zenklub.com.br/conteudo/jornadas/preocupacao---vermelho/?from=library) exclusivo capaz de te guiar no caminho para o bem-estar e a realização pessoal.

## Requisitos obrigatórios do projeto

- [ ] 1. Crie migrations para as tabelas users, categories, blog_posts, posts_categories
- [ ] 2. Crie o modelo User em src/models/User.js com as propriedades corretas
- [ ] 3. Sua aplicação deve ter o endpoint POST /login
- [ ] 4. Sua aplicação deve ter o endpoint POST /user
- [ ] 5. Sua aplicação deve ter o endpoint GET /user
- [ ] 6. Sua aplicação deve ter o endpoint GET /user/:id
- [ ] 7. Crie o modelo Category em src/models/Category.js com as propriedades corretas
- [ ] 8. Sua aplicação deve ter o endpoint POST /categories
- [ ] 9. Sua aplicação deve ter o endpoint GET /categories
- [ ] 10. Crie o modelo BlogPost em src/models/BlogPost.js com as propriedades e associações corretas
- [ ] 11. Crie o modelo PostCategory em src/models/PostCategory.js com as propriedades e associações corretas
- [ ] 12. Sua aplicação deve ter o endpoint POST /post
- [ ] 13. Sua aplicação deve ter o endpoint GET /post
- [ ] 14. Sua aplicação deve ter o endpoint GET /post/:id
- [ ] 15. Sua aplicação deve ter o endpoint PUT /post/:id

## Requisitos bônus

- [ ] 16. Sua aplicação deve ter o endpoint DELETE /post/:id
- [ ] 17. Sua aplicação deve ter o endpoint DELETE /user/me
- [ ] 18. Sua aplicação deve ter o endpoint GET /post/search?q=:searchTerm

Desejamos um bom projeto para todas as pessoas estudantes e que seja fonte de muito aprendizado. ✌️

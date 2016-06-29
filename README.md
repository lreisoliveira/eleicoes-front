### Aovivo de eventos ###

Após clonar o projeto, acesse os diretórios /src/ e /admin/src/ e renomeie o arquivo config de acordo com o ambiente.

No wordpress, chamar na página desejada com o short code abaixo:

```
[ao-vivo-eventos conteudo="narracao"]
```
# Testes unitário
## Foi utilizado karma como motor para execução de testes unitários e o Jasmine para escrita

### Procedimento para execução do teste em desenvolvimento

#### Instalando dependências de outros plugins

#### Acesse a pasta wp-content/plugins/wp-plugin-angular e execute:
```
bower install

bower install angular-mocks
```

#### Instalação dos módulos necessários
```
bower install

sudo npm install -g karma
npm install -g karma-chrome-launcher
npm install -g jasmine-ajax
```
#### Execução dos testes via linha de comando
```
karma start src/test/karma.conf.js
```

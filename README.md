# BNI_breakFast_Bill_API

## Instruction pour mise en service de l'API

Une fois les fichiers récuperer configurer la base de donnée dans le fichier .env
```
DATABASE_URL="mysql://db_user:db_password@127.0.0.1:3306/db_name?serverVersion=5.7&charset=utf8mb4"
```

Lancer ensuite un serveur local comme Wamp par exemple et suivez les instructions suivante :

```
$ composer install
```
```
$ php bin/console doctrine:database:create
```
```
$ php bin/console doctrine:migrations:migrate
```

La base de donnée est maintenant crée et prête à être utilisée.

Il faudra crée un premier utilisateur en bas de donnée et pour cela il faut generer un mot de passe crypter, utilisez la commande suivante pour crée le mot de passe, suivez les inscruction et copier le mot de passe crypter pour la suite.
```
$ php bin/console security/hash-password
 ```

Accedez maintenant à votre base de donnée par exemple via votre explorateur. Pour ma part avec Wamp "http://localhost/phpmyadmin"
Selectionner votre base de donnée et commencer par **créer une première "association" et enregistrer la.**

Faite ensuite de même avec un "user", dans le password copier le mot de passe créer juste avant et **enregistrer votre user.**

Vous pouvez maintenant lancer un serveur local comme cela (pour utiliser le front en local, il est important de lancer le serveur à l'adresse localhost:3000) :
```
$ php -S localhost:3000 -t /public
```

Connecter vous au front et loger vous avec votre username et password ;-) enjoy


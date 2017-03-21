# TeknikCollege-Stenungsunds drupal subtheme

## Instruktioner för användning:

##### 1. Installera installera sub-temat.
    1. cd /var/www/html/themes eller cd /var/www/tcstenungsund/themes
    2. drush dl bootstrap
    3. drush en bootstrap
    
##### 2. Klona projektet.
    1. git clone https://github.com/tachnik/Teknikcollege-Stenungsund.git

##### 3. Bytnamn på mappen.
    1. mv Teknikcollege-Stenungsund teknikcollege

##### 4. Aktivera sub-temat i drupal.
    1.  Logga in i drupal.
    2.  Gå till appearance.
    3.  Scrolla längst ner och tryck install och set as default på teknikcollege.
    
## För att använda backup-fil

##### 1. Kopiera filen til rätt mapp.
    1. cd /var/www/html/themes/teknikcollege
    2. cp (namnet på filen ex. backup.tar) backup.tar /var/www/

##### 2. Starta backupen.
    1. sudo drush archive-restore ./backup.tar --debug --overwrite --p --destination=/var/www/html

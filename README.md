# TeknikCollege-Stenungsunds drupal subtheme

#Instruktioner för användning:

1. Installera installera sub-temat.
  i. drush dl bootstrap
  ii. drush en bootstrap

2. Gå in i themesmappen.
  i. cd /var/www/html/themes eller cd /var/www/tcstenungsund/themes

3. Klona projektet.
  i. git clone https://github.com/tachnik/Teknikcollege-Stenungsund.git

4. Bytnamn på mappen.
  i. mv Teknikcollege-Stenungsund teknikcollege

5. Aktivera sub-temat i drupal.
  i.    Logga in i drupal.
  ii.   Gå till appearance.
  iii.  Scrolla längst ner och tryck install och set as default på teknikcollege.
    
#För att använda backup-fil

1. Kopiera filen til rätt mapp.
  i. cd /var/www/html/themes/teknikcollege
  ii. cp (namnet på filen ex. backup) backup /var/www/

2. Starta backupen.
  i. sudo drush archive-restore ./backup --debug --overwrite --p --destination=/var/www/html

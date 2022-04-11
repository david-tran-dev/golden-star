# Routes

| URL | GET | POST | PATCH | DELETE |
|---|---|---|---|---|
| /categories | ✅ | ✅ | ❌ | ❌ |
| /catgeories/:id | ✅ | ❌ | ✅ | ✅ |
| /drinks | ✅ | ✅ | ❌ | ❌ |
| /drinks/:id | ✅ | ❌ | ✅ | ✅ |
| /dishes | ✅ | ✅ | ❌ | ❌ |
| /dishes/:id | ✅ | ❌ | ✅ | ✅ |

| URL | GET | POST | PATCH | DELETE |
|---|---|---|---|---|
| /categories | récupérer toutes les categories | créer une catégorie | Cela devrait mettre à jour toutes les catégories (cela ne se fait pas dans une API REST pas de config de route) | supprimer toutes les catégories(ne pas faire!) |
| /categories/:id | récupérer UNE catégorie via son ID | créer une catégories en fixant son id d'avance (NE PAS FAIRE!) | mettre à jour une catégorie via son ID | supprimer une catégorie via son ID |
| /drinks | récupérer toutes les boissons | créer une boisson | mettre à jour toutes les boissons(ne pas faire !) | supprimer toutes les boissons(ne pas faire!) |
| /drinks/:id | récupérer UNE boisson via son ID | créer une boisson en fixant son id d'avance (NE PAS FAIRE!) | mettre à jour une boisson via son ID | supprimer une boisson via son ID |
| /dishes| récupérer tous les plats | créer un plat | mettre à jour tous les plats(ne pas faire !) | supprimer tous les plats(ne pas faire!) |
| /dishes/:id | récupérer UN plat via son ID | créer un plat en fixant son id d'avance (NE PAS FAIRE!) | mettre à jour un plat via son ID | supprimer un plat via son ID |
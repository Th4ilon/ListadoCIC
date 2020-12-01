ListadoCIC

Se requiere el desarrollo de un componente con carácter distribuible que permita presentar un
listado de valores a partir de una lectura masiva de registros (>14.000 elementos).

Deberá aceptar como parámetros de entrada filtros de fecha y valor, mientras que su
parámetro de salida será la selección concreta de la fila con el objetivo de presentar la
información en una capa externa, fuera del ámbito del componente.

Concluido el trabajo, posteriormente será necesario abrir una nueva rama de desarrollo con
carácter experimental donde incluir una feature añadida según proponga el programador.
Esta última característica nunca deberá afectar el siguiente grupo de requisitos.

Requerimientos necesarios que cumplir:
     Gestionar las peticiones de forma eficiente (fichero CSV adjunto).
     Capacidad de ordenación de columnas y paginación (preferencia por un scroll infinito).
     Capacidad responsive; habilidad para adaptarse a diferentes pantallas.
     Garantizar su comportamiento e interfaz con test unitarios.
     Distribuir en un repositorio donde gestionar la release y control de código.
Consideraciones para el desarrollo:
     Preferencia por Framework Angular (lenguaje TypeScript).
     Propuesta de utilizar librería UI de Angular Material o según elección.
     Propuesta de crear un nuevo repo en la plataforma GitHub o según elección. 
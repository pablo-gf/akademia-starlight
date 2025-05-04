---

title: ¿Cómo registrar miembros?

---

<details>
<summary> 1️⃣ Registro inicial:</summary>
    <ul>
        <li><strong>Acción del usuario</strong>: Completa el formulario de registro que contiene:</li>
            <ul>
                <li>Detalles personales (nombre, correo electrónico, número de documento, teléfono).</li>
                <li>Sede y rol seleccionados.</li>
                <li>Consentimientos de acuerdos (voluntariado, documento ético, etc).</li>
                <li>Firma digital.</li>
            </ul>
        <li><strong>Acción del sistema</strong>: Crea un "acuerdo" con:</li>
            <ul>
                <li>Estado en <code>prospect</code>.</li>
                <li>Todos los campos de información personal rellenos.</li>
                <li>Los campos de rol, sede, y acuerdo rellenos.</li>
                <li>Sin especificar los campos user_id y season_id (NULL). </li>
            </ul>
    </ul>
</details>

<details>
<summary> 2️⃣ Revisión administrativa:</summary>
    <ul>
        <li><strong>Acción del admin</strong>: Revisar y aceptar o denegar la solicitud del posible nuevo integrante.</li>
        <li><strong>Acción del sistema:</strong>:</li>
            <ul>
                <li>🚫 Solicitud denegada: Cambiar el estado del acuerdo a <code>inactive</code> .</li>
                <li>✅ Solicitud aceptada: Crear una nueva cuenta (paso 3 a continuación).</li>
            </ul>
    </ul>
</details>

<details>
<summary> 3️⃣ Crear cuenta nueva:</summary>
    <ul>
        <li><strong>Acción del sistema</strong>: Crear nuevo usuario auth de Supabase.</li>
            <ul>
                <li>Usar email del acuerdo generado en el paso 1.</li>
                <li>Generar una contraseña segura para la cuenta.</li>
            </ul>
        <li><strong>Acción del sistema</strong>: Actualizar el acuerdo.</li>
            <ul>
                <li>Conectar el user_id al acuerdo del paso 1.</li>
                <li>Asignar el season_id correspondiente.</li>
                <li>Rellenar los otros campos necesarios.</li>
            </ul>
    </ul>
</details>

<details>
<summary> 4️⃣ Creación de registros basados en roles:</summary>
    <ul>
        <li><strong>Acción del sistema</strong>: Basado en el rol del usuario, crea:
            <ul>
                <li><strong>Para estudiantes:</strong> Registro en la tabla <code>students</code>.</li>
                <li><strong>Para colaboradores:</strong> Registro en la tabla <code>collaborators</code>.</li>
                <li><strong>Para miembros del konsejo:</strong> Registros en las tablas <code>collaborators</code> y <code>konsejo_members</code>.</li>
            </ul>
        </li>
        <li><strong>Acción del sistema</strong>: Cambia el estado del acuerdo a <code>active</code>.</li>
    </ul>
</details>

<details>
<summary> 5️⃣ Entrega de credenciales (dos opciones):</summary>
    <ul>
        <li><strong>Opción 1: Entrega presencial:</strong>
            <ul>
                <li>El administrador proporciona las credenciales de inicio de sesión directamente al usuario.</li>
                <li>En MVP2, se puede considerar el envío por correo.</li>
            </ul>
        </li>
        <li><strong>Opción 2: Restablecimiento de contraseña por autoservicio:</strong>
            <ul>
                <li>El usuario utiliza la función de "olvidé mi contraseña".</li>
                <li>Valida su identidad utilizando:
                    <ul>
                        <li>Número de documento.</li>
                        <li>Correo electrónico.</li>
                        <li>Número de teléfono.</li>
                    </ul>
                </li>
                <li>El usuario establece su propia contraseña.</li>
            </ul>
        </li>
    </ul>
</details>

<details>
<summary> 6️⃣ Acceso al sistema:</summary>
    <ul>
        <li>El usuario puede iniciar sesión en el sistema.</li>
        <li>El acceso se otorga según los permisos de su rol.</li>
    </ul>
</details>


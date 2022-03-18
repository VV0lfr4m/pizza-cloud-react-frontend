import React from "react";

function Logout() {
    return (
        <div>
            <form method="POST" action="@{/logout}">
                <input type="submit" value="Logout"/>
            </form>
        </div>
    )
}

export default Logout;
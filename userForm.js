

function userForm(req,resp) {
    resp.write(`
        <form action="/submit" method="POST">
            <input type="text" name="Email">
            <input type="password" name="password">
            <button type="submit">Submit</button>
        </form>
    `);
}

module.exports=userForm;
export default function Login() {
    return (
        <>
            <div>ログインページ</div>

            <form method="post">
                <div>
                    <label for="email">ユーザー名（メールアドレス）</label>
                    <input type="mail" id="email" name="email"></input>
                </div>
                <div>
                    <label for="pass">パスワード</label>
                    <input type="text" id="pass" name="pass"></input>
                </div>
            </form>
        </>
    )
}
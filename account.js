export default function Account() {
    return (
        <>
            <div>アカウント作成</div>

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

            <li><a href="/mynumber/">マイナンバーカードの登録に進む</a></li>
        </>
    )
}
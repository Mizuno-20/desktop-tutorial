export default function Gakusesho() {
    return (
        <>
            <div>登録ページ</div>

            <dl>
                <dt>＜ 学生証の登録 ＞</dt>
                <dd>
                    <div>
                        <label><span>・背面カメラ</span>
                            <input id="input" type="file" capture="environment" accept="image/*" /></label>
                    </div>
                    <div><img id="img" /></div>
                </dd>
            </dl>

            <li><a href="/bkanryo/">登録する</a></li>
        </>
    )
}
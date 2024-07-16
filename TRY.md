# Try!

## 1.リポジトリをクローンする

`$ git clone <リポジトリURL>`

URLは、リポジトリページの右上の緑色のボタン(<> code)のHTTPSをコピーすること。

## 2.ブランチを作成し、移動する

mainブランチからdevelopブランチにチェックアウト(*)後、  
developブランチから作業用ブランチを作成し、チェックアウトします。

(*)ブランチを切り替えること。


#### 下記のコマンドの実行
* `$ git branch`
    * 現在のブランチを確認（main）
* `$ git checkout -b develop`
    * developブランチを作成してチェックアウト
* `$ git branch`
    * 現在のブランチを確認（develop）
* `$ git push origin develop`
    * 作成したdevelopブランチをリモートにpushする
* `$ git checkout -b feature/****`
    * 作業用ブランチを作成してチェックアウト
    * 必ずdevelopにいる状態で、作業用ブランチを作成すること
    * ブランチ名はfeature/苗字とする（佐藤さんの場合、ブランチ名は`feature/sato`）
* `$ git branch`
    * 現在のブランチを確認（feature/****）


## 3.ファイルの修正

front > vue_app > src > components の中にある`TheWelcome.vue`を修正します。

修正前
```
Welcome Sorich!
```
修正後
```
Welcome To Sorich!
```

## 4.修正したファイルをステージングする

`$ git add .`

または、

`$ git add ステージングしたいファイル名`

なぜステージングが必要か？→[参考記事](https://kray.jp/blog/expound-git-add/)

## 5.メッセージ付きでコミット、ステータスの確認

* `$ git commit -m "コミットメッセージ"`
    * 変更をコミット

* `$ git status`
    * ステータスの確認
    
nothing to commit, working tree clean とメッセージが表示されていればコミットできています。

## 6.変更をリモートにプッシュ

`$ git push origin feature/****`

## 7.プルリクエストの作成
プッシュが完了したら`PULL_REQUEST_TEMPLATE.md`を参考に、  
以下に3点に留意してプルリクを作成してください。

作成後、Slackでも研修担当者にメンションをつけて報告をお願いします。

* マージ先はdevelopを指定する
* Reviewersに研修担当者を指定する
* Assigneeに自分を指定する


参考：[GitHubでのプルリク作成方法](https://docs.github.com/ja/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request#creating-the-pull-request)


## 8.ブランチをマージする
研修担当者からOKが出たら、作業用ブランチをdevelopブランチにマージします。

`$ git merge develop`

完了したら、研修担当者にメンションをつけてマージしたことをお知らせください。  
以上でTry!は完了です。

import React from "react";
import Layout from "@theme/Layout";
// eslint-disable-next-line unused-imports/no-unused-imports
import Translate, {translate} from "@docusaurus/Translate";

function Help() {
  return (
    <Layout title="Help" description="Help Page" styles={{padding: "19px"}}>
      <div className="container text--center">
        <br /><br />
        <h1><Translate>Need help?</Translate></h1>
        <Translate>If you need help with CasWAF, you can try one of the mechanisms below.</Translate>
        <br /><br /><br /><br />
        <div className="row">
          <div className="col">
            <h2><Translate>Forum</Translate></h2>
            <Translate>Discuss with maintainers or share your experience about CasWAF on</Translate> <a href="https://forum.casbin.com"><Translate>CasWAF Forum</Translate></a>.
          </div>
          <div className="col">
            <h2><Translate>Discord</Translate></h2>
            <Translate>You can join the conversation on</Translate> <a href="https://discord.gg/KFqhXQnqBz"><Translate>Discord</Translate></a> <Translate>for contributing help.</Translate>
          </div>
          <div className="col">
            <h2><Translate>Tencent QQ and Wechat</Translate></h2>
            <Translate
              values={{
                714894552: (
                  <a href="https://qm.qq.com/cgi-bin/qm/qr?k=aBPu0dxHnuCH_a-Hs7ZjVSIb8sxEyW0q&jump_from=webapi&authKey=d9RenOiH4QBn/uRwqtDQOGLP7HB3ecJo3M1PSfDuXo+5GDsUzIeXsJXqCj2Mcd87">
                    714894552
                  </a>
                ),
                Wechat_group: (
                  <a href="https://cdn.casdoor.com/casdoor/resource/built-in/admin/wechat.jpg" target="_blank" rel="noreferrer">
                    Wechat group
                  </a>
                ),
              }}
            >
              {"You can contact us by joining the QQ group: {714894552} or {Wechat_group}"}
            </Translate>
          </div>
          <div className="col">
            <h2>Github</h2>
            <Translate>At our</Translate> <a href="https://github.com/casbin/caswaf"><Translate>GitHub repo</Translate></a><Translate>, browse and submit</Translate> <a href="https://github.com/casbin/caswaf/issues">issues</a> or <a href="https://github.com/casbin/caswaf/pulls">pull requests</a> <Translate>for bugs you find or any new features you may want implemented.</Translate>
          </div>
        </div>
      </div>
      <br /><br />
    </Layout>
  );
}

export default Help;

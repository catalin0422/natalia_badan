import React from "react";
import aboutImage from "../Assets/profil.jpg"; // ← pune imaginea ta în folderul /src/assets

const About = () => {
  return (
    <div className="about-section-container">
  <div className="about-section-content">
    
    <div className="about-section-text-container">
      <h3 className="about-primary-subheading">Natalia Badan</h3>
      <p className="about-primary-text">
        Sunt Natalia Badan, pictoriță contemporană, pasionată de explorarea lumii prin culori, texturi și forme. Pentru mine, pictura este mai mult decât o imagine pe pânză; este o formă de introspecție, un dialog tăcut cu universul, în care fiecare tușă poartă amprenta unei emoții, unei amintiri sau a unei stări interioare.

În lucrările mele, caut mereu echilibrul dintre culoare și emoție, dintre gestul spontan al pensulei și liniștea contemplativă care se ascunde în detalii. Fiecare tablou reprezintă o încercare de a surprinde un fragment de viață — o rază de lumină care se joacă printre frunze, reflexia unei case rustice într-un pârâu, sau atmosfera unei seri senine în sat. Este modul meu de a comunica ceea ce cuvintele nu pot exprima: acea senzație profundă de liniște, nostalgie sau bucurie subtilă.

Majoritatea lucrărilor mele sunt peisaje și scene rustice, inspirate de natura și tradițiile satului românesc, unde fiecare detaliu — fie o căsuță cu acoperiș de stuf, un drum pietruit, un deal scăldat în lumina apusului — poartă povestea locului și a timpului. În pictura mea, perfecțiunea tehnică nu este scopul, ci sinceritatea momentului, autenticitatea gestului și libertatea culorii de a prinde viață.

Prin arta mea, încerc să creez un spațiu în care privitorul să poată păși și să simtă, chiar și pentru câteva clipe, ritmul tăcut al naturii și farmecul lumii rurale, să se regăsească în lumina, umbrele și texturile pe care le aduc pe pânză. Fiecare lucrare este, în esență, o invitație la contemplare, la redescoperirea frumosului simplu și a echilibrului între liniște și emoție.
      </p>
    </div>

    {/* Imaginea */}
    <div className="about-image-container">
      <img src={aboutImage} alt="Despre TopLunch" className="about-image" />
    </div>
  </div>
</div>

  );
};

export default About;

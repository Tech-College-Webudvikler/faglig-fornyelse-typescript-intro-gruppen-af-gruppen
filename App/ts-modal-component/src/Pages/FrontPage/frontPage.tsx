import { useState } from "react";
import styles from "./frontPage.module.scss";
import Modal from "../../Components/Modal/modal";
import OpenModalButton from "../../Components/openButton/button";
import ColorSelect from "../../Components/BckgColorSelector/colorSelect";
import WidthSelect from "../../Components/WidthSelector/widthSelect";
import HeightSelect from "../../Components/HeightSelector/heightSelect";
import FontColorSelect from "../../Components/FontColorSelector/FontcolorSelect";

function FrontPage() {
    // Create a state for the modal
    const [OpenFirstModal, setFirstModal] = useState(false);
    const [OpenSecondModal, setSecondModal] = useState(false);
    const [OpenThirdModal, setThirdModal] = useState(false);
  
    // Create a state for color of the modal
    const [firstModalBg, setFirstModalBg] = useState("white");
    const [secondModalBg, setSecondModalBg] = useState("white");
    const [thirdModalBg, setThirdModalBg] = useState("white");

    // Create a state for width of the modal
    const [firstModalWidth, setFirstModalWidth] = useState("100px");
    const [secondModalWidth, setSecondModalWidth] = useState("100px");
    const [thirdModalWidth, setThirdModalWidth] = useState("100px");

    // Create a state for height of the modal
    const [firstModalHeight, setFirstModalHeight] = useState("100px");
    const [secondModalHeight, setSecondModalHeight] = useState("100px");
    const [thirdModalHeight, setThirdModalHeight] = useState("100px");

    // Create a state for font color of the modal
    const [firstModalFontColor, setFirstModalFontColor] = useState("black");
    const [secondModalFontColor, setSecondModalFontColor] = useState("black");
    const [thirdModalFontColor, setThirdModalFontColor] = useState("black");
  

    return (
      <>
      <div className={styles.page}>
  
        {/* HEADER */}
          <h1>Lad mig forklare..</h1>
        

        {/* SECTION ONE */}
          <section>
              <article>
                  <hgroup>
                      <h2>Hvad er TypeScript?</h2>
                  </hgroup>
  
                  <div>
                      <p>TypeScript er som et sikkerhedsnet til JavaScript</p>
                      <p>Det hjælper dig med at:</p>
                      <li>Fange fejl mens du koder</li>
                      <li>Sige præcis hvad en funktion eller variabel skal være</li>
                      <li>Få hjælp fra editor (forslag i infoboks ved hover)</li>
                  </div>
              </article>
          </section>


        {/* SECTION TWO */}
          <section>
              <article>
                      <hgroup>
                          <h2>Fordele ved TypeScript</h2>
                      </hgroup>
  
                      <div>
                          <h4>TypeScript passer på dig</h4>
                          <p>Det er som en hjælper, der siger: "Hey, du mangler noget eller har brugt det forkert – vil du rette det?"</p>
  
                          <h4>Din kode bliver mere tydelig</h4>
                          <p>Du og andre kan nemt se: “Hvad forventer denne funktion?”, “Hvad kommer der ud?”</p>
  
                          <h4>Din editor bliver klogere</h4>
                          <p>Du får hjælp, forslag og advarsler mens du skriver — derved bliver din copilot mere bevidst hvad der skal foretages.</p>
  
                          <h4>Færre fejl senere</h4>
                          <p>Du opdager mange fejl, inden du overhovedet kører koden — og ikke først når brugeren ser det.</p>
                      </div>
              </article>
          </section>


        {/* SECTION THREE */}
          <section>
              <article>
                      <hgroup>
                          <h2>Ulemper ved Typescript</h2>
                      </hgroup>
  
                      <div>
                          <h4>Du skal skrive mere</h4>
                          <p>Du skal skrive hvad dine funktioner og data er, altså mere kode – men du slipper for dumme fejl.</p>
  
                          <h4>Det er en læringsprocess</h4>
                          <p>Det kan virke forvirrende i starten (fx “hvad er en interface?”), men det giver hurtigt mening.</p>
  
                          <h4>Det kræver opsætning</h4>
                          <p>Du skal installere pakke og lave en tsconfig.json og måske tilføjelse eller ændring i ens package.json, men det tager som regel ikke mere end 2 minutter.</p>
                      </div>
              </article>
          </section>
          
  

        {/* SECTION FOUR */}
          <section>
              <article>
                      <hgroup>
                          <h2>Hvorfor bruger man interface i TypeScript?</h2>
                      </hgroup>
  
                      <div>
                          <p>
                          Et interface i TypeScript bruges til at beskrive strukturen af et objekt. 
                          </p>
  
                          <p>
                          Interface bruges ofte til f.eks. React props eller API-data, og det gør din kode nemmere at forstå og arbejde med – både for dig selv og andre.
                          </p>
                      </div>
              </article>
          </section>
  

        {/* SECTION FIVE */}
          <section> 
              <article>
                      <hgroup>
                          <h2>Hvad er forskel på objekt og type?</h2>
                      </hgroup>
  
                      <div>
                          <p>
                          Et objekt er en samling af felter med værdier, som navn, alder og email.
                          <br />
                          En type er en beskrivelse af hvilken slags data noget skal være — det kan være et objekt, en tekst, et tal eller en kombination.
                          </p>
                          <p>
                          ✅ Interface → Objekt
                          <br />
                          ✅ Type + objektstruktur → Objekt
                          <br />
                          ✅ Type + valgmuligheder ("aktiv" | "ikke aktiv") → Type
                          </p>
  
                          <p>
                          I Modal visning nednunder har vi brugt interface til at beskrive strukturen af vores modal og dens props.
                          </p>
  
                      </div>
              </article>
          </section>
  
  
  
  
  
        {/* BUTTONS FOR MODALS & SELECTIONS */}
        <section className={styles.gridSlection}>

            {/* Modal 1 */}
            <div>
                {/* OpenBtn */}
                <OpenModalButton setIsOpen={setFirstModal} label="Åbn Modal" />
                {/* ColorSelect */}
                <ColorSelect 
                    value={firstModalBg}
                    onChange={setFirstModalBg}
                    label={["Baggrundsfarve:"]}
                />
                {/* FontColorSelect */}
                <FontColorSelect
                    value={firstModalFontColor}
                    onChange={setFirstModalFontColor}
                    label={["Font farve:"]}
                />
                {/* WidthSelect */}
                <WidthSelect 
                    value={firstModalWidth}
                    onChange={setFirstModalWidth}
                    label={["Bredde:"]}
                />
                {/* HeightSelect */}
                <HeightSelect
                    value={firstModalHeight}
                    onChange={setFirstModalHeight}
                    label={["Højde:"]}
                />
            </div>


            {/* Modal 2 */}
            <div>
                {/* OpenBtn */}
                <OpenModalButton setIsOpen={setSecondModal} label="Åbn Modal" />
                {/* ColorSelect */}
                <ColorSelect 
                    value={secondModalBg}
                    onChange={setSecondModalBg}
                    label={["Baggrundsfarve:"]}
                />
                {/* FontColorSelect */}
                <FontColorSelect
                    value={secondModalFontColor}
                    onChange={setSecondModalFontColor}
                    label={["Font farve:"]}
                />
                {/* WidthSelect */}
                <WidthSelect 
                    value={secondModalWidth}
                    onChange={setSecondModalWidth}
                    label={["Bredde:"]}
                />
                {/* HeightSelect */}
                <HeightSelect
                    value={secondModalHeight}
                    onChange={setSecondModalHeight}
                    label={["Højde:"]}
                />
            </div>


            {/* Modal 3 */}
            <div>
                {/* OpenBtn */}
                <OpenModalButton setIsOpen={setThirdModal} label="Åbn Modal" />
                {/* ColorSelect */}
                <ColorSelect 
                    value={thirdModalBg}
                    onChange={setThirdModalBg}
                    label={["Baggrundsfarve:"]}
                />
                {/* FontColorSelect */}
                <FontColorSelect
                    value={thirdModalFontColor}
                    onChange={setThirdModalFontColor}
                    label={["Font farve:"]}
                />
                {/* WidthSelect */}
                <WidthSelect 
                    value={thirdModalWidth}
                    onChange={setThirdModalWidth}
                    label={["Bredde:"]}
                />
                {/* HeightSelect */}
                <HeightSelect
                    value={thirdModalHeight}
                    onChange={setThirdModalHeight}
                    label={["Højde:"]}
                />
            </div>

        </section>  
  
  
  
  
        {/* MODALS */}

            {/* Modal 1 */}
            <Modal 
                height={firstModalHeight}
                width={firstModalWidth} 
                color={firstModalBg} 
                fontColor={firstModalFontColor}
                isOpen={OpenFirstModal} 
                setIsOpen={setFirstModal}
                >             
                <p>Dette er modal Et</p>
            </Modal>
  
  

            {/* Modal 2 */}
            <Modal 
                height={secondModalHeight}
                width={secondModalWidth}
                color={secondModalBg} 
                fontColor={secondModalFontColor}
                isOpen={OpenSecondModal} 
                setIsOpen={setSecondModal}
                >
                <p>Dette er modal To</p>
            </Modal>


            {/* Modal 3 */}
            <Modal 
                height={thirdModalHeight}
                width={thirdModalWidth}
                color={thirdModalBg} 
                fontColor={thirdModalFontColor}
                isOpen={OpenThirdModal} 
                setIsOpen={setThirdModal}
                >
                <p>Dette er modal To</p>
              </Modal>
  
      </div>
      </>
    );
  }
  
  export default FrontPage;
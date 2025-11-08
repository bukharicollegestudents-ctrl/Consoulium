function loadSubcategories() {
    const parentCategory = document.getElementById('parent-category').value;
    const subCategorySelect = document.getElementById('sub-category');
    subCategorySelect.innerHTML = '<option value="">Select Item</option>';

    if (parentCategory === 'GENERAL') {
        subCategorySelect.innerHTML += '<option value="GEN-ASHAYA GEETHAM">ASHAYA GEETHAM</option>';
        subCategorySelect.innerHTML += '<option value="GEN-JURISPO CONTEST">JURISPO CONTEST</option>';
        subCategorySelect.innerHTML += '<option value="GEN-RESEARCH PAPER PRESENTATION">RESEARCH PAPER PRESENTATION</option>';
        subCategorySelect.innerHTML += '<option value="GEN-QAF COMPETITION">QAF COMPETITION</option>';
        subCategorySelect.innerHTML += '<option value="GEN-ARTMAGAZINE">ART MAGAZINE</option>';
        subCategorySelect.innerHTML += '<option value="GEN-SCIENCE-TEST">SCIENCE-TEST</option>';
        subCategorySelect.innerHTML += '<option value="GENERAL-MUHYIDHEEN-MALA-PADANAM">MUHYIDHEEN-MALA-PADANAM</option>';
        subCategorySelect.innerHTML += '<option value="GENERAL-LISTENING-TEST">LISTENING TEST</option>';
        subCategorySelect.innerHTML += '<option value="GENERAL-SCIENCE-EXPO">SCIENCE-EXPO</option>';
        subCategorySelect.innerHTML += '<option value="GENERAL-MATHS-TEST">MATHS-TEST</option>';
        subCategorySelect.innerHTML += '<option value="GENERAL-BURDHA-PADANAM">BURDHA-PADANAM</option>';
        subCategorySelect.innerHTML += '<option value="GENERAL-CALLIGRAPHY">CALLIGRAPHY</option>';
        subCategorySelect.innerHTML += '<option value="GENERAL-DOCUMENTARY">DOCUMENTARY</option>';
        subCategorySelect.innerHTML += '<option value="GENERAL-DARBARE-BAYAN">DARBARE-BAYAN</option>';
        subCategorySelect.innerHTML += '<option value="GENERAL-HYKU-KAVITHA">HYKU-KAVITHA</option>';
        subCategorySelect.innerHTML += '<option value="GENERAL-URDU-CONFERENCE">URDU-CONFERENCE</option>';
        subCategorySelect.innerHTML += '<option value="GENERAL-IKHTHIBARULLUGA">IKHTHIBARULLUGA</option>';
        subCategorySelect.innerHTML += '<option value="GENERAL-MUDHRAVAKYA-RACHANA">MUDHRAVAKYA RACHANA</option>';
        subCategorySelect.innerHTML += '<option value="GENERAL-NASHEEDA">NASHEEDA</option>';
        subCategorySelect.innerHTML += '<option value="GENERAL-PROGRAM-SCHEDULING">PROGRAM SCHEDULING</option>';
        subCategorySelect.innerHTML += '<option value="GENERAL-EXTEMPORE-SPEECH">EXTEMPORE SPEECH</option>';
        subCategorySelect.innerHTML += '<option value="GEN-TYPING-ARABIC">TYPING ARABIC</option>';
        subCategorySelect.innerHTML += '<option value="GEN-TYPING-MALAYALAM">TYPING MALAYALAM</option>';
        subCategorySelect.innerHTML += '<option value="GEN-TYPING-URDU">TYPING URDU</option>';
        subCategorySelect.innerHTML += '<option value="GENERAL-CANVAS-PAINTING">CANVAS PAINTING</option>';
        subCategorySelect.innerHTML += '<option value="GENERAL-DAAWA-PROJECT">DAAWA PROJECT</option>';
        subCategorySelect.innerHTML += '<option value="GEN-KAVITHAVIVARTHANAM-ENG-MAL">KAVITHAVIVARTHANAM-ENG-MAL</option>';
        subCategorySelect.innerHTML += '<option value="GEN-MAGAZINE-LAYOUT">MAGAZINE LAYOUT</option>';
        subCategorySelect.innerHTML += '<option value="GENERAL-KAVITHA-VIVARTHANAM-MAL-ARB">KAVITHA VIVARTHANAM-MAL-ARB</option>';
        subCategorySelect.innerHTML += '<option value="GEN-COVER-DESIGN">COVER DESIGN</option>';
        subCategorySelect.innerHTML += '<option value="GEN-FEATURE-WRITING">FEATURE WRITING</option>';
        subCategorySelect.innerHTML += '<option value="GEN HAVA HADDASANA">HAVA HADDASANA</option>';
        subCategorySelect.innerHTML += '<option value="GEN INTERVIEW MAKING">INTERVIEW MAKING</option>';
        subCategorySelect.innerHTML += '<option value="GEN MOMENT MASTER">MOMENT MASTER</option>';
        subCategorySelect.innerHTML += '<option value="GEN PODCAST">PODCAST</option>';
        subCategorySelect.innerHTML += '<option value="GEN POSTER DESIGNING">POSTER DESIGNING</option>';
        subCategorySelect.innerHTML += '<option value="GEN PPT MAKING">PPT MAKING</option>';
        subCategorySelect.innerHTML += '<option value="GEN THIDHKAARE RASOOL">THIDHKAARE RASOOL</option>';
        subCategorySelect.innerHTML += '<option value="GEN VIPLAVAGANA RACHANA">VIPLAVAGANA RACHANA</option>';
        subCategorySelect.innerHTML += '<option value="GENERAL FIQH SUMMIT">FIQH SUMMIT</option>';


    } else if (parentCategory === 'SUPERIOR') {
        subCategorySelect.innerHTML += '<option value="SUP-QUIZ">QUIZ</option>';
        subCategorySelect.innerHTML += '<option value="SUP-PROOFEDIT">PROOFEDIT</option>';
        subCategorySelect.innerHTML += '<option value="SUP-POEM (ARABIC)">POEM (ARABIC)</option>';
        subCategorySelect.innerHTML += '<option value="SUPERIOR-MA-ANIL-ASAR">MA-ANIL-ASAR</option>';
        subCategorySelect.innerHTML += '<option value="SUPERIOR-POEM-MALAYALAM">POEM-MALAYALAM</option>';
        subCategorySelect.innerHTML += '<option value="SUPERIOR-MEET-THE-CHAIR">MEET-THE-CHAIR</option>';
        subCategorySelect.innerHTML += '<option value="SUPERIOR-STORY-ENGLISH">STORY-ENGLISH</option>';
        subCategorySelect.innerHTML += '<option value="SUPERIOR-MUSHA-ARA-ALFIYA">MUSHA-ARA-ALFIYA</option>';
        subCategorySelect.innerHTML += '<option value="SUPERIOR-STORY-ARABIC">STORY-ARABIC</option>';
        subCategorySelect.innerHTML += '<option value="SUPERIOR-HIFZ">SUPERIOR HIFZ</option>';
        subCategorySelect.innerHTML += '<option value="SUPERIOR-THADREES">SUPERIOR-THADREES</option>';
        subCategorySelect.innerHTML += '<option value="SUPERIOR-MADH-GANA-RACHANA-ALAPANAM">MADH GANA RACHANA ALAPANAM</option>';
        subCategorySelect.innerHTML += '<option value="SUPERIOR-MICRO-TEACHING">MICRO TEACHING</option>';
        subCategorySelect.innerHTML += '<option value="SUPERIOR-TRANSLATION-ARB-URDU">TRANSLATION-ARB-URDU</option>';
        subCategorySelect.innerHTML += '<option value="SUPERIOR-STORY-MALAYALAM">STORY-MALAYALAM</option>';
        subCategorySelect.innerHTML += '<option value="SUPERIOR-POEM-MAKING-URUDU">POEM-MAKING-URUDU</option>';
        subCategorySelect.innerHTML += '<option value="SUPERIOR-STORY-URUDU">STORY-URUDU</option>';
        subCategorySelect.innerHTML += '<option value="SUPERIOR AKHEEDA CONTEST">AKHEEDA CONTEST</option>';
        subCategorySelect.innerHTML += '<option value="SUPERIOR BILINGUAL VISUAL URD-ENG">BILINGUAL VISUAL URD-ENG</option>';
        subCategorySelect.innerHTML += '<option value="SUPERIOR QIRA-ATH">QIRA-ATH</option>';
        subCategorySelect.innerHTML += '<option value="SUPERIOR-VISION-Q">VISION Q</option>';
        subCategorySelect.innerHTML += '<option value="SUPERIOR-MUHADASA-ARABIYA">MUHADASA ARABIYA</option>';
        subCategorySelect.innerHTML += '<option value="SUPERIOR-GENERAL-TEST">GENERAL-TEST</option>';
        subCategorySelect.innerHTML += '<option value="SUPERIOR-ESSAY-ENGLISH">ESSAY-ENGLISH</option>';
        subCategorySelect.innerHTML += '<option value="SUPERIOR-ELOCUTION-URDU">ELOCUTION-URDU</option>';
        subCategorySelect.innerHTML += '<option value="SUPERIOR-CULTURAL-TALK">CULTURAL TALK</option>';
        subCategorySelect.innerHTML += '<option value="SUPERIOR-ESSAY-URDU">ESSAY-URDU</option>';
        subCategorySelect.innerHTML += '<option value="SUPERIOR-KHUTHUBATHUL-JUMUA">KHUTHUBATHUL-JUMUA</option>';
        subCategorySelect.innerHTML += '<option value="SUP-AASHAYA-SAMVADHAM">AASHAYA SAMVADHAM</option>';
        subCategorySelect.innerHTML += '<option value="SUP-ELOCUTION-ARABIC">ELOCUTION-ARABIC</option>';
        subCategorySelect.innerHTML += '<option value="SUP-ELOCUTION-ENGLISH">ELOCUTION-ENGLISH</option>';
        subCategorySelect.innerHTML += '<option value="SUP-ESSAY-WRITING-MALAYALAM">ESSAY WRITING MALAYALAM</option>';
        subCategorySelect.innerHTML += '<option value="SUP-MAS-ALA-TEST">MAS-ALA-TEST</option>';
        subCategorySelect.innerHTML += '<option value="SUP-THAFSEERIYA">THAFSEERIYA</option>';
        subCategorySelect.innerHTML += '<option value="SUP-THAKREER-THAFSEER">THAKREER THAFSEER</option>';
        subCategorySelect.innerHTML += '<option value="SUPERIOR-POEM-MAKING-ENGLISH">POEM MAKING ENGLISH</option>';
        subCategorySelect.innerHTML += '<option value="SUPERIOR-SILOGICS">SILOGICS</option>';


    } else if (parentCategory === 'SENIOR') {
        subCategorySelect.innerHTML += '<option value="SENIOR-ESSAY (ARABIC)">ESSAY (ARABIC)</option>';
        subCategorySelect.innerHTML += '<option value="SENIOR-MOTO MAKING">MOTO MAKING</option>';
        subCategorySelect.innerHTML += '<option value="SENIOR-PPT PRESENTATION">PPT PRESENTATION</option>';
        subCategorySelect.innerHTML += '<option value="SENIOR-HIFZ">HIFZ</option>';
        subCategorySelect.innerHTML += '<option value="SEN-STORY-ENG">STORY-ENG</option>';
        subCategorySelect.innerHTML += '<option value="SEN-POEM-ARB">POEM-ARB</option>';
        subCategorySelect.innerHTML += '<option value="SEN-ALFIYA">ALFIYA</option>';
        subCategorySelect.innerHTML += '<option value="SENIOR-ESSAY-ARABIC">ESSAY-ARABIC</option>';
        subCategorySelect.innerHTML += '<option value="SENIOR-PROOFDIT">PROOFDIT</option>';
        subCategorySelect.innerHTML += '<option value="SENIOR-POEM-MALAYALAM">POEM MALAYALAM</option>';
        subCategorySelect.innerHTML += '<option value="SENIOR-STORY-MALAYALAM">STORY MALAYALAM</option>';
        subCategorySelect.innerHTML += '<option value="SENIOR-ELOCUTION-ARABIC">ELOCUTION-ARABIC</option>';
        subCategorySelect.innerHTML += '<option value="SENIOR-ESSAY-MALAYALAM">ESSAY MALAYALAM</option>';
        subCategorySelect.innerHTML += '<option value="SENIOR-STORY-ARABIC">STORY-ARABIC</option>';
        subCategorySelect.innerHTML += '<option value="SEN-ALFIYA">ALFIYA</option>';
        subCategorySelect.innerHTML += '<option value="SENIOR-STORY-URUDU">STORY-URUDU</option>';
        subCategorySelect.innerHTML += '<option value="SENIOR-ABSTRACT-WRITING">ABSTRACT WRITING</option>';
        subCategorySelect.innerHTML += '<option value="SENIOR-ELOCUTION-ENGLISH">ELOCUTION-ENGLISH</option>';
        subCategorySelect.innerHTML += '<option value="SENIOR-MALAPPATTU">MALAPPATTU</option>';
        subCategorySelect.innerHTML += '<option value="SENIOR-QIRA-ATH">QIRA-ATH</option>';
        subCategorySelect.innerHTML += '<option value="SENIOR-POEM-MAKING-URUDU">POEM-MAKING-URUDU</option>';
        subCategorySelect.innerHTML += '<option value="SENIOR-VA-ALU">VA-ALU</option>';
        subCategorySelect.innerHTML += '<option value="SENIOR-TRANSLATION-ENG-ARB">TRANSLATION ENG-ARB</option>';
        subCategorySelect.innerHTML += '<option value="SENIOR-ESSAY-ENGLISH">ESSAY ENGLISH</option>';
        subCategorySelect.innerHTML += '<option value="SENIOR-BILINGUAL-SPEECH">BILINGUAL SPEECH</option>';
        subCategorySelect.innerHTML += '<option value="SEN-MAPILAPATT-PADIPARAYAL">MAPILAPATT-PADIPARAYAL</option>';
        subCategorySelect.innerHTML += '<option value="SEN-TRANSLATION-URD-MAL">TRANSLATION-URD-MAL</option>';
        subCategorySelect.innerHTML += '<option value="SEN-ELOCUTION-MALAYALAM">ELOCUTION-MALAYALAM</option>';
        subCategorySelect.innerHTML += '<option value="SEN-ELOCUTION-URDU">ELOCUTION-URDU</option>';
        subCategorySelect.innerHTML += '<option value="SEN-THAHDEEB-CONTEST">THAHDEEB CONTEST</option>';
        subCategorySelect.innerHTML += '<option value="SEN-AADHARSHA-PRABASHANAM">AADHARSHA PRABASHANAM</option>';
        subCategorySelect.innerHTML += '<option value="SEN-NEWS-REPORTING-ARABIC">NEWS REPORTING ARABIC</option>';
        subCategorySelect.innerHTML += '<option value="SEN-POEM-MAKING-ENGLISH">POEM MAKING ENGLISH</option>';
        subCategorySelect.innerHTML += '<option value="SEN-SPOT-MAGAZINE-URDU">SPOT MAGAZINE URDU</option>';
        subCategorySelect.innerHTML += '<option value="SEN-THADHREES">THADHREES</option>';
        subCategorySelect.innerHTML += '<option value="SEN-X-POST">X-POST</option>';
        subCategorySelect.innerHTML += '<option value="SENIOR-ESSAY-URDU">ESSAY URDU</option>';
        subCategorySelect.innerHTML += '<option value="SENIOR-QUIZ">QUIZ</option>';






    } else if (parentCategory === 'JUNIOR') {
        subCategorySelect.innerHTML += '<option value="JUNIOR-QASEEDA RECITATION">QASEEDA RECITATION</option>';
        subCategorySelect.innerHTML += '<option value="JUNIOR-SWARF TEST">SWARF TEST</option>';
        subCategorySelect.innerHTML += '<option value="JUNIOR-ESSAY (ARABIC)">ESSAY (ARABIC)</option>';
        subCategorySelect.innerHTML += '<option value="JUNIOR-QUIZ">QUIZ</option>';
        subCategorySelect.innerHTML += '<option value="JUN-QURATHUL-AIN">QURATHUL-AIN</option>';
        subCategorySelect.innerHTML += '<option value="JUN-SPOT-MAGAZINE">SPOT-MAGAZINE</option>';
        subCategorySelect.innerHTML += '<option value="JUN-REASONING-TEST">REASONING-TEST</option>';
        subCategorySelect.innerHTML += '<option value="JUNIOR-ESSAY-MALAYALAM">ESSAY-MALAYALAM</option>';
        subCategorySelect.innerHTML += '<option value="JUNIOR-QUICK-POST">QUICK-POST</option>';
        subCategorySelect.innerHTML += '<option value="JUNIOR-HIFZ">HIFZ</option>';
        subCategorySelect.innerHTML += '<option value="JUNIOR-POEM-MALAYALAM">POEM MALAYALAM</option>';
        subCategorySelect.innerHTML += '<option value="JUNIOR-ABSTRACT-WRITING">ABSTRACT-WRITING</option>';
        subCategorySelect.innerHTML += '<option value="JUNIOR-POEM-URDU">POEM-URDU</option>';
        subCategorySelect.innerHTML += '<option value="JUNIOR-HADEES-CONTEST">HADEES CONTEST</option>';
        subCategorySelect.innerHTML += '<option value="JUNIOR-NEWS-REPORTING">NEWS REPORTING</option>';
        subCategorySelect.innerHTML += '<option value="JUNIOR-ESSAY-ENGLISH">ESSAY-ENGLISH</option>';
        subCategorySelect.innerHTML += '<option value="JUNIOR-QIRA-ATH">QIRA-ATH</option>';
        subCategorySelect.innerHTML += '<option value="JUNIOR-REEL-MAKING">REEL-MAKING</option>';
        subCategorySelect.innerHTML += '<option value="JUNIOR ELOCUTION ARABIC">ELOCUTION ARABIC</option>';
        subCategorySelect.innerHTML += '<option value="JUNIOR MUSHA ARA ALFIYA">MUSHA ARA ALFIYA</option>';
        subCategorySelect.innerHTML += '<option value="JUNIOR POEM ENGLISH"> POEM ENGLISH</option>';
        subCategorySelect.innerHTML += '<option value="JUNIOR-TRANSLATION-MALA-ENG">TRANSLATION MALA-ENG</option>';
        subCategorySelect.innerHTML += '<option value="JUNIOR-STORY-WRITING-ENG">STORY WRITING ENG</option>';
        subCategorySelect.innerHTML += '<option value="JUNIOR-STORY-URDU">STORY URDU</option>';
        subCategorySelect.innerHTML += '<option value="JUN-ELOCUTION-URDU">ELOCUTION-URDU</option>';
        subCategorySelect.innerHTML += '<option value="JUN-MUSABAQATHUL-HIKAYA">MUSABAQATHUL-HIKAYA</option>';
        subCategorySelect.innerHTML += '<option value="JUN-POEM-ARABIC">POEM-ARABIC</option>';
        subCategorySelect.innerHTML += '<option value="JUN-STORY-ARBIC">STORY-ARBIC</option>';
        subCategorySelect.innerHTML += '<option value="JUNIOR-FEATURE-WRITING">FEATURE-WRITING</option>';
        subCategorySelect.innerHTML += '<option value="JUNIOR-MOTO-MAKING">MOTO-MAKING</option>';
        subCategorySelect.innerHTML += '<option value="JUNIOR-THAHAJJI-URDU">THAHAJJI-URDU</option>';
        subCategorySelect.innerHTML += '<option value="JUNIOR-ESSAY-URDU">ESSAY URDU</option>';
        subCategorySelect.innerHTML += '<option value="JUN-ELOCUTION-MALAYALAM">ELOCUTION-MALAYALAM</option>';
        subCategorySelect.innerHTML += '<option value="JUN-NEWS-BULLETIN">NEWS-BULLETIN</option>';
        subCategorySelect.innerHTML += '<option value="JUN-STORY-WRITING-MALAYALAM">STORY-WRITING-MALAYALAM</option>';
        subCategorySelect.innerHTML += '<option value="JUN-ELOCUTION-ENGLISH">ELOCUTION-ENGLISH</option>';
        subCategorySelect.innerHTML += '<option value="JUN-TRANSLATION-ENG-ARB">TRANSLATION-ENG-ARB</option>';
        subCategorySelect.innerHTML += '<option value="JUN-VA-ALU">VA ALU</option>';
        subCategorySelect.innerHTML += '<option value="JUNIOR-HAMD-URDU">HAMAD-URDU</option>';
        subCategorySelect.innerHTML += '<option value="JUNIOR-IBARATH-READING">IBARATH-READING</option>';
        subCategorySelect.innerHTML += '<option value="JUNIOR-PROOFDIT">PROOFDIT</option>';





    } else if (parentCategory === 'PREMIER') {
        subCategorySelect.innerHTML += '<option value="PREMIER-POEM (ENGLISH)">POEM (ENGLISH)</option>';
        subCategorySelect.innerHTML += '<option value="PREMIER-HIFZ">HIFZ</option>';
        subCategorySelect.innerHTML += '<option value="PREMIER-GRAMMAR GAME (URDU)">GRAMMAR GAME (URDU)</option>';
        subCategorySelect.innerHTML += '<option value="PREMIER-QIRA-ATH">QIRA-ATH</option>';
        subCategorySelect.innerHTML += '<option value="PREMIER-QUIZ">QUIZ</option>';
        subCategorySelect.innerHTML += '<option value="PRE-GRAMMAR-ENG">GRAMMAR GAME-ENG</option>';
        subCategorySelect.innerHTML += '<option value="PRE-SWARF-TEST">SWARF-TEST</option>';
        subCategorySelect.innerHTML += '<option value="PREMIER-HADEES-CONTEST">HADEES-CONTEST</option>';
        subCategorySelect.innerHTML += '<option value="PREMIER-ESSAY-MALAYALAM">ESSAY-MALAYALAM</option>';
        subCategorySelect.innerHTML += '<option value="PREMIER-PRATHIKARANAMEZHUTHU">PRATHIKARANAMEZHUTHU</option>';
        subCategorySelect.innerHTML += '<option value="PREMIER-MISTIQUE-TEST">MISTIQUE-TEST</option>';
        subCategorySelect.innerHTML += '<option value="PREMIER-ESSAY-ARABIC">ESSAY-ARABIC</option>';
        subCategorySelect.innerHTML += '<option value="PREMIER-SPELLING-BEE">SPELLING-BEE</option>';
        subCategorySelect.innerHTML += '<option value="PREMIER-PRATHIKARANAMEZHUTHU">PRATHIKARANAMEZHUTHU</option>';
        subCategorySelect.innerHTML += '<option value="PREMIER-ELOCUTION-ENGLISH">ELOCUTION-ENGLISH</option>';
        subCategorySelect.innerHTML += '<option value="PREMIER-SPOT-MAGAZINE">SPOT-MAGAZINE</option>';
        subCategorySelect.innerHTML += '<option value="PREMIER-MADHU-GANAM">MADHU-GANAM</option>';
        subCategorySelect.innerHTML += '<option value="PREMIER-ESSAY-ENGLISH">ESSAY-ENGLISH</option>';
        subCategorySelect.innerHTML += '<option value="PREMIER-POEM-MAKING-MALAYALAM">POEM-MAKING-MALAYALAM</option>';
        subCategorySelect.innerHTML += '<option value="PREMIER ELOCUTION ARABIC">ELOCUTION ARABIC</option>';
        subCategorySelect.innerHTML += '<option value="PREMIER ELOCUTION URDU">ELOCUTION URDU</option>';
        subCategorySelect.innerHTML += '<option value="PREMIER KIFAYATHUL AVAM CONTEST">KIFAYATHUL AVAM CONTEST</option>';

        subCategorySelect.innerHTML += '<option value="PREMIER-STORY-WRITING-ENG">STORY WRITING ENG</option>';
        subCategorySelect.innerHTML += '<option value="PREMIER-STORY-MALAYALAM">STORY MALAYALAM</option>';
        subCategorySelect.innerHTML += '<option value="PREMIER-FEATURE-WRITING">FEATURE WRITING</option>';
        subCategorySelect.innerHTML += '<option value="PREMIER-ESSAY-WRITING-URDU">ESSAY WRITING URDU</option>';
        subCategorySelect.innerHTML += '<option value="PREMIER-BAYANUTHARKEEB">BAYANUTHARKEEB</option>';
        subCategorySelect.innerHTML += '<option value="PREMIER-ELOCUTION-MALAYALAM">ELOCUTION MALAYALAM</option>';
        subCategorySelect.innerHTML += '<option value="PRE-POEM-MAKING-ARABIC">POEM MAKING ARABIC</option>';
        subCategorySelect.innerHTML += '<option value="PREMIER-CAPTION-URDU">CAPTION URDU</option>';
        subCategorySelect.innerHTML += '<option value="PREMIER-PROOFDIT">PROOFDIT</option>';
        subCategorySelect.innerHTML += '<option value="PRE-BOOK-TEST">BOOK TEST</option>';
        subCategorySelect.innerHTML += '<option value="PRE-POEM-MAKING-URDU">POEM MAKING URDU</option>';
        subCategorySelect.innerHTML += '<option value="PRE-STORY-WRITING-URDU">STORY WRITING URDU</option>';
        subCategorySelect.innerHTML += '<option value="PRE-THSHAJJI-CONTEST-ARB">THSHAJJI CONTEST ARB</option>';
        subCategorySelect.innerHTML += '<option value="PRE-TRANSLATION-ARB-MAL">TRANSLATION ARB MAL</option>';
        subCategorySelect.innerHTML += '<option value="PRE-GROUP-SONG">GROUP SONG</option>';
        subCategorySelect.innerHTML += '<option value="PRE-NEWS-REPORTING">NEWS REPORTING</option>';
        subCategorySelect.innerHTML += '<option value="PRE-STORY-WRITING-ARB">STORY WRITING ARB</option>';
        subCategorySelect.innerHTML += '<option value="PREMIER-BILINGUAL-SPEECH">BILINGUAL SPEECH</option>';
        subCategorySelect.innerHTML += '<option value="PREMIER-VAALU">VA ALU</option>';



    } else if (parentCategory === 'CAMPUS-SENIOR') {
        subCategorySelect.innerHTML += '<option value="CAMPUS-SENIOR-HIFZ">HIFZ</option>';
        subCategorySelect.innerHTML += '<option value="CAMPUS-SENIOR-ESSAY-ARABIC">ESSAY ARABIC</option>';
        subCategorySelect.innerHTML += '<option value="campus SENIOR ESSAY URDU">ESSAY URDU</option>';
        subCategorySelect.innerHTML += '<option value="CAMP SEN STORY WRITING"> STORY WRITING </option>';
        subCategorySelect.innerHTML += '<option value="campus SENIOR PROGRAMME SCHEDULING"> PROGRAMME SCHEDULING</option>';
        subCategorySelect.innerHTML += '<option value="Campus SENIOR E POSTER">E POSTER</option>';
        subCategorySelect.innerHTML += '<option value="Campus SENIOR ELOCUTION ARABIC">ELOCUTION ARABIC</option>';
        subCategorySelect.innerHTML += '<option value="Campus SENIOR QIRA-ATH">QIRA-ATH</option>';
        subCategorySelect.innerHTML += '<option value="Campus SENIOR QUICK POST">QUICK POST</option>';
        subCategorySelect.innerHTML += '<option value="Campus SENIOR SLOGAN WRITING">SLOGAN WRITING</option>';
        subCategorySelect.innerHTML += '<option value="Campus SENIOR POEM MAKING">POEM MAKING</option>';
        subCategorySelect.innerHTML += '<option value="Campus SENIOR THADREES">THADREES</option>';
        subCategorySelect.innerHTML += '<option value="campus SENIOR QUIZ">QUIZ</option>';
        subCategorySelect.innerHTML += '<option value="campus SENIOR ESSAY MAL">ESSAY MAL</option>';
        subCategorySelect.innerHTML += '<option value="campus SENIOR ELOCUTION ENGLISH">ELOCUTION ENGLISH</option>';
        subCategorySelect.innerHTML += '<option value="campus SENIOR ALFIYA">ALFIYA </option>';
        subCategorySelect.innerHTML += '<option value="campus SENIOR ELOCUTION URDU">ELOCUTION URDU</option>';
        subCategorySelect.innerHTML += '<option value="campus SENIOR POSTER DESIGNING">POSTER DESIGNING</option>';
        subCategorySelect.innerHTML += '<option value="campus SENIOR REEL MAKING">REEL MAKING</option>';
        subCategorySelect.innerHTML += '<option value="campus SENIOR TRANSLATION ARB-ML">TRANSLATION ARB-ML</option>';
        subCategorySelect.innerHTML += '<option value="campus SEN SPOT MAGAZINE">SPOT MAGAZINE</option>';
        subCategorySelect.innerHTML += '<option value="campus SEN MAPPILAPATTU">MAPPILAPATTU</option>';
        subCategorySelect.innerHTML += '<option value="campus SEN IBARATH READING">IBARATH READING</option>';
        subCategorySelect.innerHTML += '<option value="campus SEN FEATURE WRITING">FEATURE WRITING </option>';
        subCategorySelect.innerHTML += '<option value="campus SEN ESSAY ENG">ESSAY ENGLISH</option>';
        subCategorySelect.innerHTML += '<option value="campus SEN DAAWA PROJECT">DAAWA PROJECT </option>';
        subCategorySelect.innerHTML += '<option value="campus SEN BOOKTEST">BOOK TEST</option>';
        subCategorySelect.innerHTML += '<option value="CAMPUS-SENIOR-QAWALI">QAWALI</option>';
        subCategorySelect.innerHTML += '<option value="CAMPUS-SENIOR-MAPPILAPPATTU-PADIPPARAYAL">MAPPILAPPATTU PADIPPARAYAL</option>';
        subCategorySelect.innerHTML += '<option value="CAMPUS-SENIOR-IQ-TEST">IQ TEST</option>';
        subCategorySelect.innerHTML += '<option value="CAMP-SEN-VA-ALU">VA ALU</option>';
        subCategorySelect.innerHTML += '<option value="CAMP-SEN-NEWS-REPORTING">NEWS REPORTING</option>';
        subCategorySelect.innerHTML += '<option value="CAMP-SEN-MAS-ALA-TEST">MAS ALA TEST</option>';
        subCategorySelect.innerHTML += '<option value="CAMP-SEN-MADHSONG">MADHSONG</option>';
        subCategorySelect.innerHTML += '<option value="CAMP-SEN-MADHGANA-RACHANA">MADHGANA RACHANA</option>';
        subCategorySelect.innerHTML += '<option value="CAMP-SEN-LANGUAGE-PRO">LANGUAGE PRO</option>';
        subCategorySelect.innerHTML += '<option value="CAMP-SEN-ELOCUTION-MAL">ELOCUTION MAL</option>';
        subCategorySelect.innerHTML += '<option value="CAMPUS-SENIOR-ENGLISH-CONFERENCE">ENGLISH CONFERENCE</option>';


    } else if (parentCategory === 'CAMPUS-JUNIOR') {
        subCategorySelect.innerHTML += '<option value="CAMPUS-JUNIOR-ESSAY-ENGLISH">ESSAY ENGLISH</option>';
        subCategorySelect.innerHTML += '<option value="CAMPUS-JUNIOR-BOOK-TEST">BOOK TEST</option>';
        subCategorySelect.innerHTML += '<option value="CAMP-JUN-SOCIAL TWEET">SOCIAL TWEET</option>';
        subCategorySelect.innerHTML += '<option value="CAMP JUN GRAMMAR GAME">GRAMMAR GAME</option>';
        subCategorySelect.innerHTML += '<option value="CAMP JUN TRANSLATION ENG-MAL">TRANSLATION ENG-MAL</option>';
        subCategorySelect.innerHTML += '<option value="CAMP-JUN-HIFZ">HIFZ</option>';
        subCategorySelect.innerHTML += '<option value="camp JUNIOR ESSAY ARABIC">ESSAY ARABIC</option>';
        subCategorySelect.innerHTML += '<option value="Campus JUNIOR IQ TEST">IQ TEST</option>';
        subCategorySelect.innerHTML += '<option value="Campus JUNIOR NAHV TEST"> NAHV TEST</option>';
        subCategorySelect.innerHTML += '<option value="Campus JUNIOR CALLIGRAPHY">CALLIGRAPHY</option>';
        subCategorySelect.innerHTML += '<option value="Campus JUNIOR NASHEEDA">NASHEEDA</option>';
        subCategorySelect.innerHTML += '<option value="campus JUNIOR SPOT MAGAZINE">SPOT MAGAZINE</option>';
        subCategorySelect.innerHTML += '<option value="campus JUNIOR GROUP SONG">GROUP SONG</option>';
        subCategorySelect.innerHTML += '<option value="campus SENIOR QUIZ">QUIZ </option>';
        subCategorySelect.innerHTML += '<option value="campus JUNIOR QIRA-ATH">QIRA-ATH</option>';
        subCategorySelect.innerHTML += '<option value="campus JUNIOR RESEARCH PAPER">RESEARCH PAPER</option>';
        subCategorySelect.innerHTML += '<option value="campus JUNIOR STORY WRITING">STORY WRITING</option>';
        subCategorySelect.innerHTML += '<option value="campus JUNIOR ELOCUTION MAL">ELOCUTION MALAYALM</option>';
        subCategorySelect.innerHTML += '<option value="CAMPUS-JUNIOR-VLOG">VLOG</option>';
        subCategorySelect.innerHTML += '<option value="CAMPUS-JUNIOR-VA-ALUA">VA-ALUA</option>';
        subCategorySelect.innerHTML += '<option value="CAMPUS-JUNIOR-SPELLING-BEE">SPELLING-BEE</option>';
        subCategorySelect.innerHTML += '<option value="CAMPUS-JUNIOR-KIFAYATHUL-AVAM-CONTEST">KIFAYATHUL-AVAM-CONTEST</option>';
        subCategorySelect.innerHTML += '<option value="CAMPUS-JUNIOR-ESSAY-MAL">ESSAY MALAYALAM</option>';
        subCategorySelect.innerHTML += '<option value="CAMPUS-JUNIOR-COLLAGE">COLLAGE</option>';
        subCategorySelect.innerHTML += '<option value="CAMPUS-JUNIOR-BILINGUAL-SPEECH">BILINGUAL SPEECH</option>';
        subCategorySelect.innerHTML += '<option value="CAMP JUN ELOCUTION ENG"> ELOCUTION ENGLISH</option>';
        subCategorySelect.innerHTML += '<option value="CAMP-JUN-SWARF-TEST">SWARF TEST</option>';
        subCategorySelect.innerHTML += '<option value="CAMP-JUN-PUSTHAKA-CHARCHA">PUSTHAKA CHARCHA</option>';
        subCategorySelect.innerHTML += '<option value="CAMP-JUN-POEM-MAKING">POEM MAKING</option>';
        subCategorySelect.innerHTML += '<option value="CAMP-JUN-MADH-SONG">MADH SONG</option>';
        subCategorySelect.innerHTML += '<option value="CAMP-JUN-HIFZ">HIFZ</option>';
        subCategorySelect.innerHTML += '<option value="CAMP-JUN-HADEES-CONTEST">HADEES CONTEST</option>';
        subCategorySelect.innerHTML += '<option value="CAMP-JUN-ELOCUTION-ARB">ELOCUTION ARABIC</option>';


    } else if (parentCategory === 'CAMPUS-SUBJUNIOR') {
        subCategorySelect.innerHTML += '<option value="CAMPUS-SUBJUNIOR-PENCIL-DRAWING">PENCIL DRAWING</option>';
        subCategorySelect.innerHTML += '<option value="CAMP-SUBJ-IQ TEST">IQ TEST</option>';
        subCategorySelect.innerHTML += '<option value="CAMP SUB ESSAY ENGLISH">ESSAY ENGLISH</option>';
        subCategorySelect.innerHTML += '<option value="CAMP SUB STORY WRITING">STORY WRITING</option>';
        subCategorySelect.innerHTML += '<option value="Campus SUB JUNIOR QUIZ">QUIZ</option>';
        subCategorySelect.innerHTML += '<option value="Campus SUB JUNIOR SWARF TEST">SWARF TEST</option>';
        subCategorySelect.innerHTML += '<option value="Campus SUB JUNIOR SPELLING BEE">SPELLING BEE</option>';
        subCategorySelect.innerHTML += '<option value="Campus SUB JUNIORMALAYALM ELOCUTION MALAYALM">ELOCUTION MALAYALM</option>';
        subCategorySelect.innerHTML += '<option value="Campus SUB JUNIOR QIRA-ATH">QIRA-ATH</option>';
        subCategorySelect.innerHTML += '<option value="campus SUB JUNIOR BOOK TEST">BOOK TEST</option>';
        subCategorySelect.innerHTML += '<option value="campus SUB JUNIOR RASEED- ULLUGA">RASEED- ULLUGA</option>';
        subCategorySelect.innerHTML += '<option value="campus SUB JUNIOR ESSAY MAL">ESSAY MAL</option>';
        subCategorySelect.innerHTML += '<option value="CAMP SUB NAATH SHAREEF">NAATH SHAREEF</option>';
        subCategorySelect.innerHTML += '<option value="CAMPUS-SUB-JUNIOR-POEM-MAKING">POEM MAKING</option>';
        subCategorySelect.innerHTML += '<option value="CAMPUS-SUB-JUNIOR-ELOCUTION-ENGLISH">ELOCUTION ENGLISH</option>';
        subCategorySelect.innerHTML += '<option value="CAMP-SUB-NEWS-READING">NEWS READING</option>';
        subCategorySelect.innerHTML += '<option value="CAMP-SUB-MADH-SONG">MADH SONG</option>';
        subCategorySelect.innerHTML += '<option value="CAMP-SUB-HIFZ">HIFZ</option>';
        subCategorySelect.innerHTML += '<option value="CAMP-SUB-GROUP-SONG">GROUP SONG</option>';
        subCategorySelect.innerHTML += '<option value="CAMP-SUB-CAPTION-WRITING">CAPTION WRITING</option>';
    }
}

function displayImage() {
    const subCategory = document.getElementById('sub-category').value;
    const imageDisplay = document.getElementById('image-display');
    const shareButton = document.getElementById('share-button');
    imageDisplay.innerHTML = '';
    shareButton.style.display = 'none';

    let imageUrl = '';
    if (subCategory === 'PREMIER-QUIZ') {
        imageUrl = 'results//PRE-QUIZ.jpg';
    } else if (subCategory === 'PREMIER-QIRA-ATH') {
        imageUrl = 'results//PRE-QIRAATH.jpg';
    } else if (subCategory === 'PREMIER-GRAMMAR GAME (URDU)') {
        imageUrl = 'results//PRE-GRAMMAR-GAME-URDU.jpg';
    } else if (subCategory === 'PREMIER-HIFZ') {
        imageUrl = 'results//PRE-HIFZ.jpg';
    } else if (subCategory === 'PREMIER-POEM (ENGLISH)') {
        imageUrl = 'results//PRE-POEM-ENG.jpg';
    } else if (subCategory === 'JUNIOR-QUIZ') {
        imageUrl = 'results//JUN-QUIZ.jpg';
    } else if (subCategory === 'JUNIOR-ESSAY (ARABIC)') {
        imageUrl = 'results//JUN-ESSAY-ARB.jpg';
    } else if (subCategory === 'JUNIOR-SWARF TEST') {
        imageUrl = 'results//JUN-SWARF-TEST.jpg';
    } else if (subCategory === 'JUNIOR-QASEEDA RECITATION') {
        imageUrl = 'results//JUN-QASEEDA.jpg';
    } else if (subCategory === 'SENIOR-HIFZ') {
        imageUrl = 'results//SEN-HIFZ.jpg';
    } else if (subCategory === 'SENIOR-PPT PRESENTATION') {
        imageUrl = 'results//SEN-PPT-PRESENTATION.jpg';
    } else if (subCategory === 'SENIOR-MOTO MAKING') {
        imageUrl = 'results//SEN-MOTO.jpg';
    } else if (subCategory === 'SENIOR-ESSAY (ARABIC)') {
        imageUrl = 'results//SEN-ESSAY-ARB.jpg';
    } else if (subCategory === 'SUP-POEM (ARABIC)') {
        imageUrl = 'results//SUP-POEMARABIC.jpg';
    } else if (subCategory === 'SUP-PROOFEDIT') {
        imageUrl = 'results//SUP-PROOFDIT.jpg';
    } else if (subCategory === 'SUP-QUIZ') {
        imageUrl = 'results//SUP-QUIZ.jpg';
    } else if (subCategory === 'GEN-QAF COMPETITION') {
        imageUrl = 'results//GEN-QAF.jpg';
    } else if (subCategory === 'GEN-RESEARCH PAPER PRESENTATION') {
        imageUrl = 'results//GEN-RESEARCHPAPER.jpg';
    } else if (subCategory === 'GEN-JURISPO CONTEST') {
        imageUrl = 'results//GEN-JURISPO.jpg';
    } else if (subCategory === 'GEN-ASHAYA GEETHAM') {
        imageUrl = 'results//GEN-ASHAYAGEETHAM.jpg';
    } else if (subCategory === 'GEN-ARTMAGAZINE') {
        imageUrl = 'results//GEN-ARTMAGAZINE.jpg';
    } else if (subCategory === 'PRE-GRAMMAR-ENG') {
        imageUrl = 'results//PRE-GRAMMAR-ENG.jpg';
    } else if (subCategory === 'JUN-QURATHUL-AIN') {
        imageUrl = 'results//JUN-QURATHUL-AIN.jpg';
    } else if (subCategory === 'GEN-SCIENCE-TEST') {
        imageUrl = 'results//GEN-SCIENCE-TEST.jpg';
    } else if (subCategory === 'JUN-SPOT-MAGAZINE') {
        imageUrl = 'results//JUN-SPOT-MAGAZINE.jpg';
    } else if (subCategory === 'SEN-STORY-ENG') {
        imageUrl = 'results//SEN-STORY-ENG.jpg';
    } else if (subCategory === 'SEN-POEM-ARB') {
        imageUrl = 'results//SEN-POEM-ARB.jpg';
    } else if (subCategory === 'JUN-REASONING-TEST') {
        imageUrl = 'results//JUN-REASONING-TEST.jpg';
    } else if (subCategory === 'SEN-ALFIYA') {
        imageUrl = 'results//SEN-ALFIYA.jpg';
    } else if (subCategory === 'PRE-SWARF-TEST') {
        imageUrl = 'results//PRE-SWARF-TEST.jpg';
    } else if (subCategory === 'PREMIER-HADEES-CONTEST') {
        imageUrl = 'results//PREMIER-HADEES-CONTEST.jpg';
    } else if (subCategory === 'JUNIOR-ESSAY-MALAYALAM') {
        imageUrl = 'results//JUNIOR-ESSAY-MALAYALAM.jpg';
    } else if (subCategory === 'PREMIER-ESSAY-MALAYALAM') {
        imageUrl = 'results//PREMIER-ESSAY-MALAYALAM.jpg';
    } else if (subCategory === 'JUNIOR-QUICK-POST') {
        imageUrl = 'results//JUNIOR-QUICK-POST.jpg';
    } else if (subCategory === 'PREMIER-PRATHIKARANAMEZHUTHU') {
        imageUrl = 'results//PREMIER-PRATHIKARANAMEZHUTHU.jpg';
    } else if (subCategory === 'SUPERIOR-POEM-MALAYALAM') {
        imageUrl = 'results//SUPERIOR-POEM-MALAYALAM.jpg';
    } else if (subCategory === 'GENERAL-MUHYIDHEEN-MALA-PADANAM') {
        imageUrl = 'results//GENERAL-MUHYIDHEEN-MALA-PADANAM.jpg';
    } else if (subCategory === 'JUNIOR-HIFZ') {
        imageUrl = 'results//JUNIOR-HIFZ.jpg';
    } else if (subCategory === 'SUPERIOR-MA-ANIL-ASAR') {
        imageUrl = 'results//SUPERIOR-MA-ANIL-ASAR.jpg';
    } else if (subCategory === 'JUNIOR-ABSTRACT-WRITING') {
        imageUrl = 'results//JUNIOR-ABSTRACT-WRITING.jpg';
    } else if (subCategory === 'PREMIER-MISTIQUE-TEST') {
        imageUrl = 'results//PREMIER-MISTIQUE-TEST.jpg';
    } else if (subCategory === 'GENERAL-LISTENING-TEST') {
        imageUrl = 'results//GENERAL-LISTENING TEST.jpg';
    } else if (subCategory === 'PREMIER-ESSAY-ARABIC') {
        imageUrl = 'results//PREMIER-ESSAY-ARABIC.jpg';
    } else if (subCategory === 'GENERAL-SCIENCE-EXPO') {
        imageUrl = 'results//GENERAL-SCIENCE-EXPO.jpg';
    } else if (subCategory === 'SUPERIOR-ESSAY-ARABIC') {
        imageUrl = 'results//SUPERIOR-ESSAY-ARABIC.jpg';
    } else if (subCategory === 'PREMIER-SPELLING-BEE') {
        imageUrl = 'results//PREMIER-SPELLING-BEE.jpg';
    } else if (subCategory === 'GENERAL-MATHS-TEST') {
        imageUrl = 'results//GENERAL-MATHS-TEST.jpg';
    } else if (subCategory === 'SUPERIOR-MEET-THE-CHAIR') {
        imageUrl = 'results//SUPERIOR-MEET-THE-CHAIR.jpg';
    } else if (subCategory === 'GENERAL-BURDHA-PADANAM') {
        imageUrl = 'results//GENERAL-BURDHA-PADANAM.jpg';
    } else if (subCategory === 'SUPERIOR-STORY-ENGLISH') {
        imageUrl = 'results//SUPERIOR-STORY-ENGLISH.jpg';
    } else if (subCategory === 'SUPERIOR-MUSHA-ARA-ALFIYA') {
        imageUrl = 'results//SUPERIOR-MUSHA-ARA-ALFIYA.jpg';
    } else if (subCategory === 'SENIOR-PROOFDIT') {
        imageUrl = 'results//SENIOR-PROOFDIT.jpg';
    } else if (subCategory === 'SUPERIOR-STORY-ARABIC') {
        imageUrl = 'results//SUPERIOR-STORY-ARABIC.jpg';
    } else if (subCategory === 'JUNIOR-POEM-URDU') {
        imageUrl = 'results//JUNIOR-POEM-URDU.jpg';
    } else if (subCategory === 'GENERAL-CALLIGRAPHY') {
        imageUrl = 'results//GENERAL-CALLIGRAPHY-.jpg';
    } else if (subCategory === 'SUPERIOR-THADREES') {
        imageUrl = 'results//SUPERIOR-THADREES.jpg';
    } else if (subCategory === 'JUNIOR-ESSAY-ENGLISH') {
        imageUrl = 'results//JUNIOR-ESSAY-ENGLISH.jpg';
    } else if (subCategory === 'SENIOR-POEM-MALAYALAM') {
        imageUrl = 'results//SENIOR-POEM-MALAYALAM.jpg';
    } else if (subCategory === 'SUPERIOR-TRANSLATION-ARB-URDU') {
        imageUrl = 'results//SUPERIOR-TRANSLATION-ARB-URDU.jpg';
    } else if (subCategory === 'PREMIER-ELOCUTION-ENGLISH') {
        imageUrl = 'results//PREMIER-ELOCUTION-ENGLISH.jpg';
    } else if (subCategory === 'CAMPUS-SENIOR-HIFZ') {
        imageUrl = 'results//CAMP-SEN-HIFZ.jpg';
    } else if (subCategory === 'CAMPUS-JUNIOR-ESSAY-ENGLISH') {
        imageUrl = 'results//CAMP-JUN-ESSAY-ENGLISH.jpg';
    } else if (subCategory === 'CAMPUS-SUBJUNIOR-PENCIL-DRAWING') {
        imageUrl = 'results//CAMP-SUB-PENCIL-DRAWING.jpg';
    } else if (subCategory === 'CAMPUS-SENIOR-ESSAY-ARABIC') {
        imageUrl = 'results//CAMP-SEN-ESSAY-ARABIC.jpg';
    } else if (subCategory === 'CAMPUS-JUNIOR-BOOK-TEST') {
        imageUrl = 'results//CAMP-JUNI-BOOKTEST.jfif';
    } else if (subCategory === 'GENERAL-DOCUMENTARY') {
        imageUrl = 'results//GENERAL-DOCUMENTARY.jpg';
    } else if (subCategory === 'JUNIOR-POEM-MALAYALAM') {
        imageUrl = 'results//JUNIOR-POEM-MALAYALAM.jpg';
    } else if (subCategory === 'PREMIER-MADHU-GANAM') {
        imageUrl = 'results//PREMIER-MADHU-GANAM.jpg';
    } else if (subCategory === 'PREMIER-SPOT-MAGAZINE') {
        imageUrl = 'results//PREMIER-SPOT-MAGAZINE.jpg';
    } else if (subCategory === 'SENIOR-STORY-MALAYALAM') {
        imageUrl = 'results//SENIOR-STORY-MALAYALAM.jpg';
    } else if (subCategory === 'SUPERIOR-HIFZ') {
        imageUrl = 'results//SUPERIOR-HIFZ.jpg';
    } else if (subCategory === 'SUPERIOR-MADH-GANA-RACHANA-ALAPANAM') {
        imageUrl = 'results//SUPERIOR-MADH-GANA-RACHANA-ALAPANAM.jpg';
    } else if (subCategory === 'SUPERIOR-MICRO-TEACHING') {
        imageUrl = 'results//SUPERIOR-MICRO-TEACHING.jpg';
    } else if (subCategory === 'SUPERIOR-STORY-MALAYALAM') {
        imageUrl = 'results//SUPERIOR-STORY-MALAYALAM.jpg';
    } else if (subCategory === 'CAMP-JUN-SOCIAL TWEET') {
        imageUrl = 'camp.result//CAMP-JUN-SOCIAL TWEET.jpg';
    } else if (subCategory === 'CAMP-SUBJ-IQ TEST') {
        imageUrl = 'camp.result//CAMP-SUBJ-IQ TEST.jpg';
    } else if (subCategory === 'campus SENIOR ESSAY URDU') {
        imageUrl = 'camp.result//campus SENIOR ESSAY URDU.jpg';
    } else if (subCategory === 'campus SENIOR PROGRAMME SCHEDULING') {
        imageUrl = 'camp.result//campus SENIOR PROGRAMME SCHEDULING.jpg';
    } else if (subCategory === 'JUNIOR-HADEES-CONTEST') {
        imageUrl = 'results//71-80//JUNIOR-HADEES-CONTEST.jpg';
    } else if (subCategory === 'JUNIOR-NEWS-REPORTING') {
        imageUrl = 'results//71-80//JUNIOR-NEWS-REPORTING.jpg';
    } else if (subCategory === 'PREMIER-ESSAY-ENGLISH') {
        imageUrl = 'results//71-80//PREMIER-ESSAY-ENGLISH.jpg';
    } else if (subCategory === 'SENIOR-ELOCUTION-ARABIC') {
        imageUrl = 'results//71-80//SENIOR-ELOCUTION-ARABIC.jpg';
    } else if (subCategory === 'SENIOR-ESSAY-MALAYALAM') {
        imageUrl = 'results//71-80//SENIOR-ESSAY-MALAYALAM.jpg';
    } else if (subCategory === 'SENIOR-STORY-ARABIC') {
        imageUrl = 'results//71-80//SENIOR-STORY-ARABIC.jpg';
    } else if (subCategory === 'SENIOR-STORY-URUDU') {
        imageUrl = 'results//71-80//SENIOR-STORY-URUDU.jpg';
    } else if (subCategory === 'SUPERIOR-POEM-MAKING-URUDU') {
        imageUrl = 'results//71-80//SUPERIOR-POEM-MAKING-URUDU.jpg';
    } else if (subCategory === 'SUPERIOR-STORY-URUDU') {
        imageUrl = 'results//71-80//SUPERIOR-STORY-URUDU.jpg';
    } else if (subCategory === 'CAMP JUN GRAMMAR GAME') {
        imageUrl = 'camp.result//10-15//CAMP JUN GRAMMAR GAME.jpg';
    } else if (subCategory === 'CAMP JUN TRANSLATION ENG-MAL') {
        imageUrl = 'camp.result//10-15//CAMP JUN TRANSLATION ENG-MAL.jpg';
    } else if (subCategory === 'CAMP SEN STORY WRITING') {
        imageUrl = 'camp.result//10-15//CAMP SEN STORY WRITING.jpg';
    } else if (subCategory === 'CAMP SUB ESSAY ENGLISH') {
        imageUrl = 'camp.result//10-15//CAMP SUB ESSAY ENGLISH.jpg';
    } else if (subCategory === 'CAMP SUB STORY WRITING') {
        imageUrl = 'camp.result//10-15//CAMP SUB STORY WRITING.jpg';
    } else if (subCategory === 'PREMIER-POEM-MAKING-MALAYALAM') {
        imageUrl = 'results//81-90//PREMIER-POEM-MAKING-MALAYALAM.jpg';
    } else if (subCategory === 'JUNIOR-QIRA-ATH') {
        imageUrl = 'results//81-90//JUNIOR-QIRA-ATH.jpg';
    } else if (subCategory === 'JUNIOR-REEL-MAKING') {
        imageUrl = 'results//81-90//JUNIOR-REEL-MAKING.jpg';
    } else if (subCategory === 'GENERAL-DARBARE-BAYAN') {
        imageUrl = 'results//81-90//GENERAL-DARBARE-BAYAN.jpg';
    } else if (subCategory === 'GENERAL-HYKU-KAVITHA') {
        imageUrl = 'results//81-90//GENERAL-HYKU-KAVITHA.jpg';
    } else if (subCategory === 'GENERAL-URDU-CONFERENCE') {
        imageUrl = 'results//81-90//GENERAL-URDU-CONFERENCE.jpg';
    } else if (subCategory === 'SENIOR-ABSTRACT-WRITING') {
        imageUrl = 'results//81-90//SENIOR-ABSTRACT-WRITING.jpg';
    } else if (subCategory === 'SENIOR-ELOCUTION-ENGLISH') {
        imageUrl = 'results//81-90//SENIOR-ELOCUTION-ENGLISH.jpg';
    } else if (subCategory === 'SENIOR-MALAPPATTU') {
        imageUrl = 'results//81-90//SENIOR-MALAPPATTU.jpg';
    } else if (subCategory === 'SENIOR-QIRA-ATH') {
        imageUrl = 'results//81-90//SENIOR-QIRA-ATH.jpg';
    } else if (subCategory === 'PREMIER KIFAYATHUL AVAM CONTEST') {
        imageUrl = 'results//91-100//PREMIER KIFAYATHUL AVAM CONTEST.jpg';
    } else if (subCategory === 'PREMIER ELOCUTION URDU') {
        imageUrl = 'results//91-100//PREMIER ELOCUTION URDU.jpg';
    } else if (subCategory === 'PREMIER ELOCUTION ARABIC') {
        imageUrl = 'results//91-100//PREMIER ELOCUTION ARABIC.jpg';
    } else if (subCategory === 'JUNIOR POEM ENGLISH') {
        imageUrl = 'results//91-100//JUNIOR POEM ENGLISH.jpg';
    } else if (subCategory === 'JUNIOR MUSHA ARA ALFIYA') {
        imageUrl = 'results//91-100//JUNIOR MUSHA ARA ALFIYA.jpg';
    } else if (subCategory === 'JUNIOR ELOCUTION ARABIC') {
        imageUrl = 'results//91-100//JUNIOR ELOCUTION ARABIC.jpg';
    } else if (subCategory === 'SENIOR-POEM-MAKING-URUDU') {
        imageUrl = 'results//91-100//SENIOR POEM URDU.jpg';
    } else if (subCategory === 'SUPERIOR QIRA-ATH') {
        imageUrl = 'results//91-100//SUPERIOR QIRA-ATH.jpg';
    } else if (subCategory === 'SUPERIOR BILINGUAL VISUAL URD-ENG') {
        imageUrl = 'results//91-100//SUPERIOR BILINGUAL VISUAL URD-ENG.jpg';
    } else if (subCategory === 'SUPERIOR AKHEEDA CONTEST') {
        imageUrl = 'results//91-100//SUPERIOR AKHEEDA CONTEST.jpg';
    } else if (subCategory === 'camp JUNIOR ESSAY ARABIC') {
        imageUrl = 'camp.result//15-25//camp JUNIOR ESSAY ARABIC.jpg';
    } else if (subCategory === 'camp JUNIOR ESSAY ENGLISH') {
        imageUrl = 'camp.result//15-25//Campus JUNIOR IQ TEST.jpg';
    } else if (subCategory === 'Campus JUNIOR NAHV TEST') {
        imageUrl = 'camp.result//15-25//Campus JUNIOR NAHV TEST.jpg';
    } else if (subCategory === 'Campus SENIOR E POSTER') {
        imageUrl = 'camp.result//15-25//Campus SENIOR E POSTER.jpg';
    } else if (subCategory === 'Campus SENIOR ELOCUTION ARABIC') {
        imageUrl = 'camp.result//15-25//Campus SENIOR ELOCUTION ARABIC.jpg';
    } else if (subCategory === 'Campus SENIOR QIRA-ATH') {
        imageUrl = 'camp.result//15-25//Campus SENIOR QIRA-ATH.jpg';
    } else if (subCategory === 'Campus SENIOR QUICK POST') {
        imageUrl = 'camp.result//15-25//Campus SENIOR QUICK POST.jpg';
    } else if (subCategory === 'Campus SENIOR SLOGAN WRITING') {
        imageUrl = 'camp.result//15-25//Campus SENIOR SLOGAN WRITING.jpg';
    } else if (subCategory === 'Campus SUB JUNIOR QUIZ') {
        imageUrl = 'camp.result//15-25//Campus SUB JUNIOR QUIZ.jpg';
    } else if (subCategory === 'Campus SUB JUNIOR SWARF TEST') {
        imageUrl = 'camp.result//15-25//Campus SUB JUNIOR SWARF TEST.jpg';
    } else if (subCategory === 'Campus JUNIOR CALLIGRAPHY') {
        imageUrl = 'camp.result//25-30//Campus JUNIOR CALLIGRAPHY.jpg';
    } else if (subCategory === 'Campus JUNIOR NASHEEDA') {
        imageUrl = 'camp.result//25-30//Campus JUNIOR NASHEEDA.jpg';
    } else if (subCategory === 'Campus SENIOR POEM MAKING') {
        imageUrl = 'camp.result//25-30//Campus SENIOR POEM MAKING.jpg';
    } else if (subCategory === 'Campus SENIOR THADREES') {
        imageUrl = 'camp.result//25-30//Campus SENIOR THADREES.jpg';
    } else if (subCategory === 'Campus SUB JUNIOR SPELLING BEE') {
        imageUrl = 'camp.result//25-30//Campus SUB JUNIOR SPELLING BEE.jpg';
    } else if (subCategory === 'Campus SUB JUNIORMALAYALM ELOCUTION MALAYALM') {
        imageUrl = 'camp.result//25-30//campus SUB JUNIORMALAYALM ELOCUTION MALAYALM.jpg';
    } else if (subCategory === 'campus SUB JUNIOR RASEED- ULLUGA') {
        imageUrl = 'camp.result//31-40//campus SUB JUNIOR RASEED- ULLUGA.jpg';
    } else if (subCategory === 'campus SUB JUNIOR BOOK TEST') {
        imageUrl = 'camp.result//31-40//campus SUB JUNIOR BOOK TEST.jpg';
    } else if (subCategory === 'campus SENIOR QUIZ') {
        imageUrl = 'camp.result//31-40//campus SENIOR QUIZ.jpg';
    } else if (subCategory === 'campus SENIOR ESSAY MAL') {
        imageUrl = 'camp.result//31-40//campus SENIOR ESSAY MAL.jpg';
    } else if (subCategory === 'campus SENIOR ELOCUTION ENGLISH') {
        imageUrl = 'camp.result//31-40//campus SENIOR ELOCUTION ENGLISH.jpg';
    } else if (subCategory === 'campus SENIOR ALFIYA') {
        imageUrl = 'camp.result//31-40//campus SENIOR ALFIYA.jpg';
    } else if (subCategory === 'campus JUNIOR SPOT MAGAZINE') {
        imageUrl = 'camp.result//31-40//campus JUNIOR SPOT MAGAZINE.jpg';
    } else if (subCategory === 'campus JUNIOR QUIZ') {
        imageUrl = 'camp.result//31-40//campus JUNIOR QUIZ.jpg';
    } else if (subCategory === 'campus JUNIOR GROUP SONG') {
        imageUrl = 'camp.result//31-40//campus JUNIOR GROUP SONG.jpg';
    } else if (subCategory === 'campus JUNIOR QIRA-ATH') {
        imageUrl = 'camp.result//41-50//campus JUNIOR QIRA-ATH.jpg';
    } else if (subCategory === 'campus JUNIOR RESEARCH PAPER') {
        imageUrl = 'camp.result//41-50//campus JUNIOR RESEARCH PAPER.jpg';
    } else if (subCategory === 'campus JUNIOR STORY WRITING') {
        imageUrl = 'camp.result//41-50//campus JUNIOR STORY WRITING.jpg';
    } else if (subCategory === 'campus SENIOR ELOCUTION URDU') {
        imageUrl = 'camp.result//41-50//campus SENIOR ELOCUTION URDU.jpg';
    } else if (subCategory === 'campus SENIOR POSTER DESIGNING') {
        imageUrl = 'camp.result//41-50//campus SENIOR POSTER DESIGNING.jpg';
    } else if (subCategory === 'campus SENIOR REEL MAKING') {
        imageUrl = 'camp.result//41-50//campus SENIOR REEL MAKING.jpg';
    } else if (subCategory === 'campus SENIOR TRANSLATION ARB-ML') {
        imageUrl = 'camp.result//41-50//campus SENIOR TRANSLATION ARB-ML.jpg';
    } else if (subCategory === 'campus SUB JUNIOR ESSAY MAL') {
        imageUrl = 'camp.result//41-50//campus SUB JUNIOR ESSAY MAL.jpg';
    } else if (subCategory === 'campus SUB JUNIOR QIRA-ATH') {
        imageUrl = 'camp.result//41-50//campus SUB JUNIOR QIRA-ATH.jpg';
    } else if (subCategory === 'CAMP JUN ELOCUTION ENG') {
        imageUrl = 'camp.result//50-60//CAMP JUN ELOCUTION ENG.jpg';
    } else if (subCategory === 'CAMP SUB NAATH SHAREEF') {
        imageUrl = 'camp.result//50-60//CAMP SUB NAATH SHAREEF.jpg';
    } else if (subCategory === 'campus SEN SPOT MAGAZINE') {
        imageUrl = 'camp.result//50-60//CAMP SEN SPOT MAGAZINE.jpg';
    } else if (subCategory === 'campus SEN MAPPILAPATTU') {
        imageUrl = 'camp.result//50-60//CAMP SEN MAPPILAPATTU.jpg';
    } else if (subCategory === 'campus SEN IBARATH READING') {
        imageUrl = 'camp.result//50-60//campus SENIOR IBARATH READING.JPG';
    } else if (subCategory === 'campus SEN FEATURE WRITING') {
        imageUrl = 'camp.result//50-60//CAMP SEN FEATURE WRITING.jpg';
    } else if (subCategory === 'campus SEN ESSAY ENG') {
        imageUrl = 'camp.result//50-60//CAMP SEN ESSAY ENG.jpg';
    } else if (subCategory === 'campus SEN DAAWA PROJECT') {
        imageUrl = 'camp.result//50-60//CAMP SEN DAAWA PROJECT.jpg';
    } else if (subCategory === 'campus SEN BOOKTEST') {
        imageUrl = 'camp.result//50-60//CAMP SEN BOOKTEST.jpg';
    } else if (subCategory === 'campus JUNIOR ELOCUTION MAL') {
        imageUrl = 'camp.result//50-60//CAMP JUN ELOCUTION MAL.jpg';
    } else if (subCategory === 'GENERAL-DAAWA-PROJECT') {
        imageUrl = 'results//101-125//GENERAL DAAWA PROJECT.jpg';
    } else if (subCategory === 'GENERAL-EXTEMPORE-SPEECH') {
        imageUrl = 'results//101-125//GENERAL EXTEMPORE SPEECH.jpg';
    } else if (subCategory === 'SUPERIOR-VISION-Q') {
        imageUrl = 'results//101-125//SUPERIOR VISION Q.jpg';
    } else if (subCategory === 'SUPERIOR-MUHADASA-ARABIYA') {
        imageUrl = 'results//101-125//SUPERIOR MUHADASA ARABIYA.jpg';
    } else if (subCategory === 'SUPERIOR-GENERAL-TEST') {
        imageUrl = 'results//101-125//SUPERIOR GENERAL TEST.jpg';
    } else if (subCategory === 'SUPERIOR-ESSAY-ENGLISH') {
        imageUrl = 'results//101-125//SUPERIOR ESSAY ENGLISH.jpg';
    } else if (subCategory === 'SUPERIOR-ELOCUTION-URDU') {
        imageUrl = 'results//101-125//SUPERIOR ELOCUTION URDU.jpg';
    } else if (subCategory === 'SENIOR-VA-ALU') {
        imageUrl = 'results/101-125/SENIOR VA-ALU.jpg';
    } else if (subCategory === 'SENIOR-TRANSLATION-ENG-ARB') {
        imageUrl = 'results//101-125//SENIOR TRANSLATION ENG-ARB.jpg';
    } else if (subCategory === 'SENIOR-ESSAY-ENGLISH') {
        imageUrl = 'results//101-125//SENIOR ESSAY ENGLISH.jpg';
    } else if (subCategory === 'SENIOR-BILINGUAL-SPEECH') {
        imageUrl = 'results//101-125//SENIOR BILINGUAL SPEECH.jpg';
    } else if (subCategory === 'PREMIER-STORY-WRITING-ENG') {
        imageUrl = 'results//101-125//PREMIER STORY WRITING ENG.jpg';
    } else if (subCategory === 'PREMIER-STORY-MALAYALAM') {
        imageUrl = 'results//101-125//PREMIER STORY MALAYALAM.jpg';
    } else if (subCategory === 'PREMIER-FEATURE-WRITING') {
        imageUrl = 'results//101-125//PREMIER FEATURE WRITING.jpg';
    } else if (subCategory === 'PREMIER-ESSAY-WRITING-URDU') {
        imageUrl = 'results//101-125//PREMIER ESSAY WRITING URDU.jpg';
    } else if (subCategory === 'PREMIER-BAYANUTHARKEEB') {
        imageUrl = 'results//101-125//PREMIER BAYANUTHARKEEB.jpg';
    } else if (subCategory === 'PREMER-ELOCUTION-MALAYALAM') {
        imageUrl = 'results//101-125//PREMER ELOCUTION MALAYALAM.jpg';
    } else if (subCategory === 'JUNIOR-TRANSLATION-MALA-ENG') {
        imageUrl = 'results//101-125//JUNIOR TRANSLATION MALA-ENG.jpg';
    } else if (subCategory === 'JUNIOR-STORY-WRITING-ENG') {
        imageUrl = 'results//101-125//JUNIOR STORY WRITING ENG.jpg';
    } else if (subCategory === 'JUNIOR-STORY-URDU') {
        imageUrl = 'results//101-125//JUNIOR STORY URDU.jpg';
    } else if (subCategory === 'JUNIOR-ESSAY-URDU') {
        imageUrl = 'results//101-125//JUNIOR ESSAY URDU.jpg';
    } else if (subCategory === 'GENERAL-PROGRAM-SCHEDULING') {
        imageUrl = 'results//101-125//GENERAL PROGRAM SCHEDULING.jpg';
    } else if (subCategory === 'GENERAL-NASHEEDA') {
        imageUrl = 'results//101-125//GENERAL NASHEEDA.jpg';
    } else if (subCategory === 'GENERAL-MUDHRAVAKYA-RACHANA') {
        imageUrl = 'results//101-125//GENERAL MUDHRAVAKYA RACHANA.jpg';
    } else if (subCategory === 'GENERAL-IKHTHIBARULLUGA') {
        imageUrl = 'results//101-125//GENERAL IKHTHIBARULLUGA.jpg';
    } else if (subCategory === 'CAMPUS-SUB-JUNIOR-POEM-MAKING') {
        imageUrl = 'camp.result//61-92//campus SUB JUNIOR POEM MAKING.JPG';
    } else if (subCategory === 'CAMPUS-SUB-JUNIOR-ELOCUTION-ENGLISH') {
        imageUrl = 'camp.result//61-92//campus SUB JUNIOR ELOCUTION ENGLISH.JPG';
    } else if (subCategory === 'CAMPUS-SENIOR-QAWALI') {
        imageUrl = 'camp.result//61-92//campus SENIOR QAWALI.JPG';
    } else if (subCategory === 'CAMPUS-SENIOR-MAPPILAPPATTU-PADIPPARAYAL') {
        imageUrl = 'camp.result//61-92//campus SENIOR MAPPILAPPATTU PADIPPARAYAL.JPG';
    } else if (subCategory === 'CAMPUS-SENIOR-IQ-TEST') {
        imageUrl = 'camp.result//61-92//campus SENIOR IQ TEST.JPG';
    } else if (subCategory === 'CAMPUS-SENIOR-ENGLISH-CONFERENCE') {
        imageUrl = 'camp.result//61-92//campus SENIOR ENGLISH CONFERENCE.JPG';
    } else if (subCategory === 'CAMPUS-JUNIOR-VLOG') {
        imageUrl = 'camp.result//61-92//campus JUNIOR VLOG.JPG';
    } else if (subCategory === 'CAMPUS-JUNIOR-VA-ALUA') {
        imageUrl = 'camp.result//61-92//campus JUNIOR VA ALUA.JPG';
    } else if (subCategory === 'CAMPUS-JUNIOR-SPELLING-BEE') {
        imageUrl = 'camp.result//61-92//campus JUNIOR SPELLING BEE.JPG';
    } else if (subCategory === 'CAMPUS-JUNIOR-KIFAYATHUL-AVAM-CONTEST') {
        imageUrl = 'camp.result//61-92//campus JUNIOR KIFAYATHUL AVAM CONTEST.JPG';
    } else if (subCategory === 'CAMPUS-JUNIOR-ESSAY-MAL') {
        imageUrl = 'camp.result//61-92//campus JUNIOR ESSAY MAL.JPG';
    } else if (subCategory === 'CAMPUS-JUNIOR-COLLAGE') {
        imageUrl = 'camp.result//61-92//campus JUNIOR COLLAGE.JPG';
    } else if (subCategory === 'CAMPUS-JUNIOR-BILINGUAL-SPEECH') {
        imageUrl = 'camp.result//61-92//campus JUNIOR BILINGUAL SPEECH.JPG';
    } else if (subCategory === 'CAMP-SUB-NEWS-READING') {
        imageUrl = 'camp.result//61-92//CAMP SUB NEWS READING.jpg';
    } else if (subCategory === 'CAMP-SUB-MADH-SONG') {
        imageUrl = 'camp.result//61-92//CAMP SUB MADH SONG.jpg';
    } else if (subCategory === 'CAMP-SUB-HIFZ') {
        imageUrl = 'camp.result//61-92//CAMP SUB HIFZ.jpg';
    } else if (subCategory === 'CAMP-SUB-GROUP-SONG') {
        imageUrl = 'camp.result//61-92//CAMP SUB GROUP SONG.jpg';
    } else if (subCategory === 'CAMP-SUB-CAPTION-WRITING') {
        imageUrl = 'camp.result//61-92//CAMP SUB CAPTION WRITING.jpg';
    } else if (subCategory === 'CAMP-SEN-VA-ALU') {
        imageUrl = 'camp.result//61-92//CAMP SEN VA-ALU.jpg';
    } else if (subCategory === 'CAMP-SEN-NEWS-REPORTING') {
        imageUrl = 'camp.result//61-92//CAMP SEN NEWS REPORTING.jpg';
    } else if (subCategory === 'CAMP-SEN-MAS-ALA-TEST') {
        imageUrl = 'camp.result//61-92//CAMP SEN MAS-ALA TEST.jpg';
    } else if (subCategory === 'CAMP-SEN-MADHSONG') {
        imageUrl = 'camp.result//61-92//CAMP SEN MADHSONG.jpg';
    } else if (subCategory === 'CAMP-SEN-MADHGANA-RACHANA') {
        imageUrl = 'camp.result//61-92//CAMP SEN MADHGANA RACHANA.jpg';
    } else if (subCategory === 'CAMP-SEN-LANGUAGE-PRO') {
        imageUrl = 'camp.result//61-92//CAMP SEN LANGUAGE PRO.jpg';
    } else if (subCategory === 'CAMP-SEN-ELOCUTION-MAL') {
        imageUrl = 'camp.result//61-92//CAMP SEN ELOCUTION MAL.jpg';
    } else if (subCategory === 'CAMP-JUN-SWARF-TEST') {
        imageUrl = 'camp.result//61-92//CAMP JUN SWARF TEST.jpg';
    } else if (subCategory === 'CAMP-JUN-PUSTHAKA-CHARCHA') {
        imageUrl = 'camp.result//61-92//CAMP JUN PUSTHAKA-CHARCHA.jpg';
    } else if (subCategory === 'CAMP-JUN-POEM-MAKING') {
        imageUrl = 'camp.result//61-92//CAMP JUN POEM MAKING.jpg';
    } else if (subCategory === 'CAMP-JUN-MADH-SONG') {
        imageUrl = 'camp.result//61-92//CAMP JUN MADH SONG.jpg';
    } else if (subCategory === 'CAMP-JUN-HIFZ') {
        imageUrl = 'camp.result//61-92//CAMP JUN HIFZ.jpg';
    } else if (subCategory === 'CAMP-JUN-HADEES-CONTEST') {
        imageUrl = 'camp.result//61-92//CAMP JUN HADEES CONTEST.jpg';
    } else if (subCategory === 'CAMP-JUN-ELOCUTION-ARB') {
        imageUrl = 'camp.result//61-92//CAMP JUN ELOCUTION ARB.jpg';
    } else if (subCategory === 'GEN-TYPING-ARABIC') {
        imageUrl = 'results//126-144//GEN TYPING ARABIC.jpg';
    } else if (subCategory === 'GEN-TYPING-MALAYALAM') {
        imageUrl = 'results//126-144//GEN TYPING MALAYALAM.jpg';
    } else if (subCategory === 'GEN-TYPING-URDU') {
        imageUrl = 'results//126-144//GEN TYPING URDU.jpg';
    } else if (subCategory === 'GENERAL-CANVAS-PAINTING') {
        imageUrl = 'results//126-144//GENERAL CANVAS PAINTING.jpg';
    } else if (subCategory === 'JUN-ELOCUTION-URDU') {
        imageUrl = 'results//126-144//JUN ELOCUTION URDU.jpg';
    } else if (subCategory === 'JUN-MUSABAQATHUL-HIKAYA') {
        imageUrl = 'results//126-144//JUN MUSABAQATHUL HIKAYA.jpg';
    } else if (subCategory === 'JUN-POEM-ARABIC') {
        imageUrl = 'results//126-144//JUN POEM ARABIC.jpg';
    } else if (subCategory === 'JUN-STORY-ARBIC') {
        imageUrl = 'results//126-144//JUN STORY ARBIC.jpg';
    } else if (subCategory === 'JUNIOR-FEATURE-WRITING') {
        imageUrl = 'results//126-144//JUNIOR FEATURE WRITING.jpg';
    } else if (subCategory === 'JUNIOR-MOTO-MAKING') {
        imageUrl = 'results//126-144//JUNIOR MOTO MAKING.jpg';
    } else if (subCategory === 'JUNIOR-THAHAJJI-URDU') {
        imageUrl = 'results//126-144//JUNIOR THAHAJJI URDU.jpg';
    } else if (subCategory === 'PRE-POEM-MAKING-ARABIC') {
        imageUrl = 'results//126-144//PRE POEM MAKING ARABIC.jpg';
    } else if (subCategory === 'PREMIER-CAPTION-URDU') {
        imageUrl = 'results//126-144//PREMIER CAPTION URDU.jpg';
    } else if (subCategory === 'PREMIER-PROOFDIT') {
        imageUrl = 'results//126-144//PREMIER PROOFDIT.jpg';
    } else if (subCategory === 'SEN-MAPILAPATT-PADIPARAYAL') {
        imageUrl = 'results//126-144//SEN MAPILAPATT PADIPARAYAL.jpg';
    } else if (subCategory === 'SEN-TRANSLATION-URD-MAL') {
        imageUrl = 'results//126-144//SEN TRANSLATION URD-MAL.jpg';
    } else if (subCategory === 'SUPERIOR-CULTURAL-TALK') {
        imageUrl = 'results//126-144//SUPERIOR CULTURAL TALK.jpg';
    } else if (subCategory === 'GEN-KAVITHAVIVARTHANAM-ENG-MAL') {
        imageUrl = 'results//145-160//GEN KAVITHAVIVARTHANAM ENG-MAL.jpg';
    } else if (subCategory === 'GEN-MAGAZINE-LAYOUT') {
        imageUrl = 'results//145-160//GEN MAGAZINE LAYOUT.jpg';
    } else if (subCategory === 'GENERAL-KAVITHA-VIVARTHANAM-MAL-ARB') {
        imageUrl = 'results//145-160//GENERAL KAVITHA VIVARTHANAM MAL-ARB.jpg';
    } else if (subCategory === 'JUN-ELOCUTION-MALAYALAM') {
        imageUrl = 'results//145-160//JUN ELOCUTION MALAYALAM.jpg';
    } else if (subCategory === 'JUN-NEWS-BULLETIN') {
        imageUrl = 'results//145-160//JUN NEWS BULLETIN.jpg';
    } else if (subCategory === 'JUN-STORY-WRITING-MALAYALAM') {
        imageUrl = 'results//145-160//JUN STORY WRITING MALAYALAM.jpg';
    } else if (subCategory === 'PRE-BOOK-TEST') {
        imageUrl = 'results//145-160//PRE BOOK TEST.jpg';
    } else if (subCategory === 'PRE-POEM-MAKING-URDU') {
        imageUrl = 'results//145-160//PRE POEM MAKING URDU.jpg';
    } else if (subCategory === 'PRE-STORY-WRITING-URDU') {
        imageUrl = 'results//145-160//PRE STORY WRITING URDU.jpg';
    } else if (subCategory === 'PRE-THSHAJJI-CONTEST-ARB') {
        imageUrl = 'results//145-160//PRE THSHAJJI CONTEST ARB.jpg';
    } else if (subCategory === 'PRE-TRANSLATION-ARB-MAL') {
        imageUrl = 'results//145-160//PRE TRANSLATION ARB-MAL.jpg';
    } else if (subCategory === 'SEN-ELOCUTION-MALAYALAM') {
        imageUrl = 'results//145-160//SEN ELOCUTION MALAYALAM.jpg';
    } else if (subCategory === 'SEN-ELOCUTION-URDU') {
        imageUrl = 'results//145-160//SEN ELOCUTION URDU.jpg';
    } else if (subCategory === 'SEN-THAHDEEB-CONTEST') {
        imageUrl = 'results//145-160//SEN THAHDEEB CONTEST.jpg';
    } else if (subCategory === 'SUPERIOR-ESSAY-URDU') {
        imageUrl = 'results//145-160//SUP ESSAY URDU.jpg';
    } else if (subCategory === 'SUPERIOR-KHUTHUBATHUL-JUMUA') {
        imageUrl = 'results//145-160//SUP KHUTHUBATHUL JUMUA.jpg';
    } else if (subCategory === 'GEN-COVER-DESIGN') {
        imageUrl = 'results//CHANGE//GENERAL COVER DESIGN.JPG';
    } else if (subCategory === 'GEN FEATURE WRITING') {
        imageUrl = 'results//161-199//GEN FEATURE WRITING.jpg';
    } else if (subCategory === 'GEN HAVA HADDASANA') {
        imageUrl = 'results//161-199//GEN HAVA HADDASANA.jpg';
    } else if (subCategory === 'GEN INTERVIEW MAKING') {
        imageUrl = 'results//161-199//GEN INTERVIEW MAKING.jpg';
    } else if (subCategory === 'GEN MOMENT MASTER') {
        imageUrl = 'results//161-199//GEN MOMENT MASTER.jpg';
    } else if (subCategory === 'GEN PODCAST') {
        imageUrl = 'results//161-199//GEN PODCAST.jpg';
    } else if (subCategory === 'GEN POSTER DESIGNING') {
        imageUrl = 'results//161-199//GEN POSTER DESIGNING.jpg';
    } else if (subCategory === 'GEN PPT MAKING') {
        imageUrl = 'results//161-199//GEN PPT MAKING.jpg';
    } else if (subCategory === 'GEN THIDHKAARE RASOOL') {
        imageUrl = 'results//161-199//GEN THIDHKAARE RASOOL.jpg';
    } else if (subCategory === 'GEN VIPLAVAGANA RACHANA') {
        imageUrl = 'results//161-199//GEN VIPLAVAGANA RACHANA.jpg';
    } else if (subCategory === 'GENERAL FIQH SUMMIT') {
        imageUrl = 'results//161-199//GENERAL FIQH SUMMIT.jpg';
    } else if (subCategory === 'JUN-ELOCUTION-ENGLISH') {
        imageUrl = 'results//161-199//JUN ELOCUTION ENGLISH.jpg';
    } else if (subCategory === 'JUN-TRANSLATION-ENG-ARB') {
        imageUrl = 'results//161-199//JUN TRANSLATION ENG-ARB.jpg';
    } else if (subCategory === 'JUN-VA-ALU') {
        imageUrl = 'results//161-199//JUN VA ALU.jpg';
    } else if (subCategory === 'JUNIOR-HAMD-URDU') {
        imageUrl = 'results//161-199//JUNIOR HAMD URDU.jpg';
    } else if (subCategory === 'JUNIOR-IBARATH-READING') {
        imageUrl = 'results//161-199//JUNIOR IBARATH READING.jpg';
    } else if (subCategory === 'JUNIOR-PROOFDIT') {
        imageUrl = 'results//161-199//JUNIOR PROOFDIT.jpg';
    } else if (subCategory === 'PRE-GROUP-SONG') {
        imageUrl = 'results//161-199//PRE GROUP SONG.jpg';
    } else if (subCategory === 'PRE-NEWS-REPORTING') {
        imageUrl = 'results//161-199//PRE NEWS REPORTING.jpg';
    } else if (subCategory === 'PRE-STORY-WRITING-ARB') {
        imageUrl = 'results//161-199//PRE STORY WRITING ARB.jpg';
    } else if (subCategory === 'PREMIER-BILINGUAL-SPEECH') {
        imageUrl = 'results//161-199//PREMIER BILINGUAL SPEECH.jpg';
    } else if (subCategory === 'PREMIER-VAALU') {
        imageUrl = 'results//161-199//PREMIER VAALU.jpg';
    } else if (subCategory === 'SEN-AADHARSHA-PRABASHANAM') {
        imageUrl = 'results//161-199//SEN AADHARSHA PRABASHANAM.jpg';
    } else if (subCategory === 'SEN-NEWS-REPORTING-ARABIC') {
        imageUrl = 'results//161-199//SEN NEWS REPORTING ARABIC.jpg';
    } else if (subCategory === 'SEN-POEM-MAKING-ENGLISH') {
        imageUrl = 'results//161-199//SEN POEM MAKING ENGLISH.jpg';
    } else if (subCategory === 'SEN-SPOT-MAGAZINE-URDU') {
        imageUrl = 'results//161-199//SEN SPOT MAGAZINE URDU.jpg';
    } else if (subCategory === 'SEN-THADHREES') {
        imageUrl = 'results//161-199//SEN THADHREES.jpg';
    } else if (subCategory === 'SEN-X-POST') {
        imageUrl = 'results//161-199//SEN X-POST.jpg';
    } else if (subCategory === 'SENIOR-ESSAY-URDU') {
        imageUrl = 'results//161-199//SENIOR ESSAY URDU.jpg';
    } else if (subCategory === 'SENIOR-QUIZ') {
        imageUrl = 'results//161-199//SENIOR QUIZ.jpg';
    } else if (subCategory === 'SUP-AASHAYA-SAMVADHAM') {
        imageUrl = 'results//161-199//SUP AASHAYA SAMVADHAM.jpg';
    } else if (subCategory === 'SUP-ELOCUTION-ARABIC') {
        imageUrl = 'results//161-199//SUP ELOCUTION ARABIC.jpg';
    } else if (subCategory === 'SUP-ELOCUTION-ENGLISH') {
        imageUrl = 'results//161-199//SUP ELOCUTION ENGLISH.jpg';
    } else if (subCategory === 'SUP-ESSAY-WRITING-MALAYALAM') {
        imageUrl = 'results//161-199//SUP ESSAY WRITING MALAYALAM.jpg';
    } else if (subCategory === 'SUP-MAS-ALA-TEST') {
        imageUrl = 'results//161-199//SUP MAS-ALA TEST.jpg';
    } else if (subCategory === 'SUP-THAFSEERIYA') {
        imageUrl = 'results//161-199//SUP THAFSEERIYA.jpg';
    } else if (subCategory === 'SUP-THAKREER-THAFSEER') {
        imageUrl = 'results//161-199//SUP THAKREER THAFSEER.jpg';
    } else if (subCategory === 'SUPERIOR-POEM-MAKING-ENGLISH') {
        imageUrl = 'results//161-199//SUPERIOR POEM MAKING ENGLISH.jpg';
    } else if (subCategory === 'SUPERIOR-SILOGICS') {
        imageUrl = 'results//161-199//SUPERIOR SILOGICS.jpg';
    } else if (subCategory === 'PREMIER-ELOCUTION-MALAYALAM') {
        imageUrl = 'results//101-125//PREMER ELOCUTION MALAYALAM.jpg';
    } else if (subCategory === 'SUPERIOR-ESSAY-ARABIC') {
        imageUrl = 'results//SEN-ESSAY-ARB.jpg';
    }
    if (imageUrl) {
        const img = document.createElement('img');
        img.src = imageUrl;
        img.alt = subCategory;
        imageDisplay.appendChild(img);
        shareButton.style.display = 'block';
    }
}


function shareImage() {
    const imageDisplay = document.getElementById('image-display');
    const img = imageDisplay.querySelector('img');
    if (img) {
        const imageUrl = img.src;
        if (navigator.share) {
            navigator.share({
                title: 'Check your Results Now!',
                text: 'Check your Results Now! https://consoulium.com/update.html',
                url: imageUrl
            }).then(() => {
                console.log('Image shared successfully');
            }).catch((error) => {
                console.error('Error sharing image:', error);
            });
        } else {
            alert('Share feature is not supported in your browser.');
        }
    }
}

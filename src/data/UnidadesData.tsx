import Central from "/src/assets/Foto_locais/Inst-Central.jpg"
import Psiquiatria from "/src/assets/Foto_locais/Inst-Psquiatria.jpg"
import MedicinaFR from "/src/assets/Foto_locais/Inst-MedicinaFR.jpg"
import Coracao from "/src/assets/Foto_locais/Inst-Coracao.jpg"
import Ambulatorio from "/src/assets/Foto_locais/Predio-Ambula.jpg"
import Ortopedia from "/src/assets/Foto_locais/Inst-Ortopedia.jpg"
import Crianca from "/src/assets/Foto_locais/Inst-Crianca.jpg"
import Radiologia from "/src/assets/Foto_locais/Inst-Radiologia.jpg"
import Investigacao from "/src/assets/Foto_locais/lab_investigação_medica.jpg"
import Reboucas from "/src/assets/Foto_locais/HC-reboucas.jpg"
import Inova from "/src/assets/Foto_locais/inova-HC.jpg"
import Administracao from "/src/assets/Foto_locais/Predio_administracao.jpg"
import HCX from "/src/assets/Foto_locais/HCx-Fmusp.jpg"
import Perdizes from "/src/assets/Foto_locais/Perdizes.jpg"
import Cancer from "/src/assets/Foto_locais/Inst-Cancer.jpg"
import Ensino from "/src/assets/Foto_locais/Ensino-Pesquisa-Inovacao.jpg"

export interface Unidade {
  identificador: number;
  id : string; 
  nome: string;
  img: string; 
  linkMaps: string;
  descricao: string; 
  localizacao: string;
}

export const unidades: Unidade[] = [
  { 
    identificador: 1,
    id: 'instituto-central', 
    nome: 'Instituto Central', 
    img: Central, 
    linkMaps: 'https://maps.app.goo.gl/mD2z7farRVFXSPum8',
    descricao: 'O Instituto Central é o maior dos institutos do complexo do Hospital das Clínicas, oferecendo uma vasta gama de especialidades médicas e cirúrgicas. É um centro de referência em tratamentos de alta complexidade.',
    localizacao: 'Av. Dr. Enéas Carvalho de Aguiar, 255 - Cerqueira César, São Paulo - SP, 05403-000'
  },
  { 
    identificador: 2,
    id: 'instituto-psiquiatria',
    nome: 'Instituto de Psiquiatria', 
    img: Psiquiatria, 
    linkMaps: 'https://maps.app.goo.gl/9sWDFCQmjVHvhyFr9',
    descricao: 'Referência nacional em saúde mental, o Instituto de Psiquiatria atua no tratamento, ensino e pesquisa de transtornos mentais, oferecendo atendimento para todas as faixas etárias.',
    localizacao: 'R. Dr. Ovídio Pires de Campos, 785 - Cerqueira César, São Paulo - SP, 05403-010'
  },
  {
    identificador: 3,
    id: 'instituto-medicina-fisica',
    nome: 'Instituto de Medicina Física e Reabilitação',
    img: MedicinaFR,
    linkMaps: 'https://maps.app.goo.gl/4Q6DiyDq2HtvJbhd9',
    descricao: 'Focado na recuperação de pacientes, o IMREA oferece tratamentos de reabilitação para diversas condições, utilizando tecnologia de ponta e equipes multidisciplinares.',
    localizacao: 'Rua Domingo de Soto, 100 - Vila Mariana, São Paulo - SP, 04116-030'
  },
  { 
    identificador: 4,
    id: 'instituto-coracao',
    nome: 'Instituto do Coração (InCor)', 
    img: Coracao, 
    linkMaps: 'https://maps.app.goo.gl/XbWYbaC8bgVDkcVc6',
    descricao: 'O InCor é um hospital público universitário de alta complexidade, especializado em cardiologia, pneumologia e cirurgias cardíaca e torácica. É um dos maiores centros do mundo em sua especialidade.',
    localizacao: 'Av. Dr. Enéas Carvalho de Aguiar, 44 - Cerqueira César, São Paulo - SP, 05403-900'
  },
  { 
    identificador: 5,
    id: 'predio-ambulatorios', 
    nome: 'Prédio dos Ambulatórios', 
    img: Ambulatorio, 
    linkMaps: 'https://maps.app.goo.gl/h612dbh25FpNfbG6A', 
    descricao: 'Este prédio concentra grande parte das consultas ambulatoriais do complexo, atendendo pacientes de diversas especialidades para acompanhamento e diagnóstico.' ,
    localizacao: 'Av. Dr. Enéas Carvalho de Aguiar, 155 - 8o. andar - bloco laranja - Cerqueira César, São Paulo - SP, 05403-000'
  },
  { 
    identificador: 6,
    id: 'instituto-ortopedia', 
    nome: 'Instituto de Ortopedia e Traumatologia', 
    img: Ortopedia, 
    linkMaps: 'https://maps.app.goo.gl/HVZoG7ha5BC9TwaL6', 
    descricao: 'O IOT é referência no tratamento de doenças do sistema musculoesquelético, incluindo cirurgias complexas, reabilitação e pesquisa em ortopedia.' ,
    localizacao: 'R. Dr. Ovídio Pires de Campos, 333 - Cerqueira César, São Paulo - SP, 05403-010'
  },
  { 
    identificador: 7,
    id: 'instituto-crianca', 
    nome: 'Instituto da Criança e do Adolescente', 
    img: Crianca, 
    linkMaps: 'https://maps.app.goo.gl/ChtnhJgkzxw3XJCC8', 
    descricao: 'Dedicado à saúde infantojuvenil, o ICr oferece atendimento pediátrico de alta complexidade, sendo um hospital de referência para casos graves e raros.' ,
    localizacao: 'Av. Dr. Enéas Carvalho de Aguiar, 647 - Cerqueira César, São Paulo - SP, 05403-000'
  },
  { 
    identificador: 8,
    id: 'instituto-radiologia', 
    nome: 'Instituto de Radiologia (InRad)', 
    img: Radiologia, 
    linkMaps: 'https://maps.app.goo.gl/C2FNvS5m3V7fMUuE6', 
    descricao: 'O InRad é um centro de diagnóstico por imagem de ponta, oferecendo exames como ressonância magnética, tomografia, PET-CT e outros procedimentos radiológicos.',
    localizacao: '03178-200 - Cerqueira César (localizado em: Hospital das Clínicas FMUSP)'
  },
  { 
    identificador: 9,
    id: 'laboratorios-investigacao', 
    nome: 'Laboratórios de Investigação Médica', 
    img: Investigacao, 
    linkMaps: 'https://limhc.fm.usp.br/portal', 
    descricao: 'Os LIMs são um conjunto de 66 laboratórios que desenvolvem pesquisas de ponta nas mais diversas áreas da medicina, contribuindo para o avanço científico.' ,
    localizacao: ''
  },
  {  
    identificador: 10,
    id: 'centro-convencoes-reboucas', 
    nome: 'Centro de Convenções Rebouças', 
    img: Reboucas, 
    linkMaps: 'https://maps.app.goo.gl/SnmtBMusmdDGKMH27', 
    descricao: 'Anexo ao complexo HC, o Centro de Convenções Rebouças sedia grandes eventos, congressos e simpósios, principalmente na área da saúde.' ,
    localizacao: 'Av. Rebouças, 600 - Pinheiros, São Paulo - SP, 05402-000'
  },
  { 
    identificador: 11,
    id: 'inova-hc', 
    nome: 'Inova HC', 
    img: Inova, 
    linkMaps: 'https://maps.app.goo.gl/VEbL9L5B3MRCAR6J9', 
    descricao: 'O InovaHC é o núcleo de inovação tecnológica do Hospital das Clínicas, conectando o hospital com startups, empresas e pesquisadores para desenvolver novas soluções em saúde.' ,
    localizacao: 'R. Dr. Ovídio Pires de Campos - Cerqueira César, São Paulo - SP, 05401-000'
  },
  { 
    identificador: 12,
    id: 'predio-administracao', 
    nome: 'Prédio da Administração', 
    img: Administracao, 
    linkMaps: 'https://maps.app.goo.gl/WkmqwCb18xoHPxPX9', 
    descricao: 'Este edifício centraliza as atividades administrativas e a diretoria do Hospital das Clínicas, sendo o coração da gestão do complexo hospitalar.' ,
    localizacao: 'R. Dr. Ovídio Pires de Campos, 225 - Cerqueira César, São Paulo - SP, 05402-000'
  },
  { 
    identificador: 13,
    id: 'hcx-fmusp', 
    nome: 'HCX FMUSP', 
    img: HCX, 
    linkMaps: 'https://maps.app.goo.gl/xxEE64NBKk15Re3x6', 
    descricao: 'O HCX é a Escola de Educação Permanente do HC, oferecendo cursos de especialização, extensão e aperfeiçoamento para profissionais da área da saúde.' ,
    localizacao: 'R. Dr. Ovídio Pires de Campos, 471 - Cerqueira César, São Paulo - SP, 05402-000'
  },
  { 
    identificador: 14,
    id: 'instituto-perdizes', 
    nome: 'Instituto Perdizes', 
    img: Perdizes, 
    linkMaps: 'https://maps.app.goo.gl/vo1Lfb4M5FcJrCGj9', 
    descricao: 'O Instituto Perdizes é uma unidade anexa ao Instituto de Psiquiatria, focada em programas específicos de tratamento e reabilitação em saúde mental.' ,
    localizacao: 'R. Cotoxó, 1142 - Pompeia, São Paulo - SP, 05021-001'
  },
  { 
    identificador: 15,
    id: 'instituto-cancer', 
    nome: 'Instituto do Câncer (ICESP)', 
    img: Cancer, 
    linkMaps: 'https://maps.app.goo.gl/7WYhVZiGzLxJAUzV6', 
    descricao: 'O Instituto do Câncer do Estado de São Paulo é o maior centro oncológico da América Latina, oferecendo tratamento completo e humanizado para pacientes com câncer.' ,
    localizacao: 'Av. Dr. Arnaldo, 251 - Cerqueira César, São Paulo - SP, 01246-000'
  },
  { 
    identificador: 16,
    id: 'laboratorio-ensino', 
    nome: 'Laboratório de Ensino, Pesquisa e Inovação', 
    img: Ensino, 
    linkMaps: 'https://maps.app.goo.gl/RReca9ceffz9mQnJ9', 
    descricao: 'Focado na inovação em cirurgia, este laboratório desenvolve e testa novas técnicas e tecnologias cirúrgicas, além de promover treinamento para médicos e residentes.' ,
    localizacao: 'R. Dr. Ovídio Pires de Campos, 225 - Cerqueira César - Jardins, São Paulo - SP, 05403-000'
  },
];
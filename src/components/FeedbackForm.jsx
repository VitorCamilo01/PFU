import relatorioImg from '../assets/relatorio.jpg';

const FeedbackForm = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '32px' }}>
      <img
        src={relatorioImg}
        alt="Relatório"
        style={{ maxWidth: '100%', borderRadius: '16px', boxShadow: '0 4px 16px rgba(60,80,180,0.10)' }}
      />
    </div>
  );
}

export default FeedbackForm;
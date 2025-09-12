import React from 'react';

function FeedbackList({ feedbacks }) {
  if (feedbacks.length === 0) {
    return <p>Ainda não há feedbacks. Seja o primeiro a enviar!</p>;
  }

  const getSentimentClass = (tipo) => {
    if (!tipo) return 'neutro';
    return tipo.toLowerCase();
  };

  return (
    <div className="feedback-list">
      <h3>Feedbacks Recebidos:</h3>
      {feedbacks.map((feedback, index) => (
        <div
          key={index}
          className={`feedback-card ${getSentimentClass(feedback.tipo)}`}
        >
          <p>{feedback.texto}</p>
          <small>Classificação: {feedback.tipo || 'Não classificado'}</small>
        </div>
      ))}
    </div>
  );
}

export default FeedbackList;
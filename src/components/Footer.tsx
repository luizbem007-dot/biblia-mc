export default function Footer() {
  return (
    <footer className="footer" aria-label="Rodapé">
      <div className="container grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <h4 className="footer-title">Editora Marcas</h4>
          <p>
            Há 15 anos levando a Palavra de Deus com excelência. 
            Sediada em Cariacica-ES, servindo todo o Brasil.
          </p>
        </div>
        <div>
          <h4 className="footer-title">Links Rápidos</h4>
          <ul className="footer-list">
            <li>Sobre a Bíblia McCheyne</li>
            <li>Assista ao Vídeo Completo</li>
            <li>Perguntas Frequentes</li>
            <li>Fale Conosco</li>
          </ul>
        </div>
        <div>
          <h4 className="footer-title">Contato</h4>
          <p>📍 Cariacica - ES, Brasil</p>
          <p>📱 WhatsApp: (27) 99227-9555</p>
          <p>📧 contato@editoramarcas.com.br</p>
          <p>🌐 www.editoramarcas.com.br</p>
        </div>
        <div>
          <h4 className="footer-title">Redes Sociais</h4>
          <p>Instagram | Facebook | YouTube</p>
        </div>
      </div>
      <div className="footer-divider" />
      <div className="container footer-bottom">
        <p>© 2025 Editora Marcas. Todos os direitos reservados.</p>
        <p>Desenvolvido com 💛 para a glória de Deus.</p>
        <div className="footer-badges">
          <span>🔒 Site Seguro SSL</span>
          <span>💳 PagSeguro/Mercado Pago</span>
          <span>📦 Correios Oficial</span>
        </div>
      </div>
    </footer>
  );
}

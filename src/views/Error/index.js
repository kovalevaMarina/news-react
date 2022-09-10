function ErrorPage() {
  return (
    <>
      <section className="error-page">
        <div className="container">
          <div
            className="error-page__wrap"
            style={{ padding: '30px 0', textAlign: 'center' }}
          >
            <h1 style={{ marginBottom: '20px' }}>Not found... &#9785;</h1>
            <p>The link is broken or the page has been moved.</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default ErrorPage;

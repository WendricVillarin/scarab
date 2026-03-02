import './UrlsTools.css';

function UrlsTools() {
  const tools = [
    { name: 'VirusTotal', url: 'https://www.virustotal.com/', description: 'Analyze viruses, malware & URLs' },
    { name: 'CyberChef', url: 'https://gchq.github.io/CyberChef/', description: 'Cyber security Swiss Army Knife' },
    { name: 'WaybackMachine', url: 'https://web.archive.org/', description: 'Digital archive of the WWW' },
    { name: 'TestLocally', url: 'https://testlocal.ly/', description: 'See live website from any location' },
  ];

  return (
    <section className="urls-tools" aria-label="Useful Tools">
      <h2 className="tools-title">Useful Security Tools</h2>
      <div className="tools-grid">
        {tools.map((tool) => (
          <a
            key={tool.name}
            href={tool.url}
            target="_blank"
            rel="noopener noreferrer"
            className="tool-card"
          >
            <h3 className="tool-name">{tool.name}</h3>
            <p className="tool-description">{tool.description}</p>
          </a>
        ))}
      </div>
    </section>
  );
}

export default UrlsTools;

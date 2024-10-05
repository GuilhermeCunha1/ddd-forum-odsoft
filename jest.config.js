module.exports = {
  transform: {
    '^.+\\.ts?$': 'ts-jest'
  },
  testEnvironment: 'node',
  testRegex: './src/.*\\.(test|spec)\\.ts$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  roots: [
    "<rootDir>/src"
  ],
  reporters: [
    "default",
    [
      "jest-html-reporter",
      {
        pageTitle: "Test Report",
        outputPath: "./reports/test-report.html", // Ajustado o caminho para uma pasta específica
        includeFailureMsg: true, // Incluir mensagens de falha no relatório
        includeSuiteFailure: true, // Incluir falha de toda a suíte
        useBrowserName: false // Defina como true se quiser diferenciar por navegador
      }
    ],
    [
      "jest-junit",
      {
        outputDirectory: "./reports", // Diretório onde será salvo o relatório XML
        outputName: "junit.xml", // Nome do arquivo XML
        suiteName: "jest tests", // Nome da suíte de testes
        classNameTemplate: "{classname}-{title}", // Formato da classe no relatório
        titleTemplate: "{classname}-{title}", // Formato do título no relatório
        ancestorSeparator: " › ", // Separador para nomes ancestrais
        usePathForSuiteName: "true" // Usar o caminho do arquivo para o nome da suíte
      }
    ]
  ]
};

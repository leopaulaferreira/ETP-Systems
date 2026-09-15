CREATE EXTENSION IF NOT EXISTS "pgcrypto";

CREATE TABLE usuarios (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  nome VARCHAR(150) NOT NULL,
  email VARCHAR(150) UNIQUE NOT NULL,
  senha_hash TEXT NOT NULL,
  perfil VARCHAR(50) DEFAULT 'aluno',
  empresa_id UUID,
  criado_em TIMESTAMPTZ DEFAULT NOW(),
  atualizado_em TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE empresas (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  nome VARCHAR(150) NOT NULL,
  descricao TEXT,
  criado_em TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE categorias (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  nome VARCHAR(100) NOT NULL,
  descricao TEXT,
  criado_em TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE trilhas_aprendizagem (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  nome VARCHAR(150) NOT NULL,
  descricao TEXT,
  empresa_id UUID REFERENCES empresas(id),
  criado_em TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE cursos (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  titulo VARCHAR(200) NOT NULL,
  descricao TEXT,
  categoria_id UUID REFERENCES categorias(id),
  criado_em TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE trilhas_cursos (
  trilha_id UUID NOT NULL REFERENCES trilhas_aprendizagem(id) ON DELETE CASCADE,
  curso_id UUID NOT NULL REFERENCES cursos(id) ON DELETE CASCADE,
  criado_em TIMESTAMPTZ DEFAULT NOW(),
  PRIMARY KEY (trilha_id, curso_id)
);

CREATE TABLE inscricoes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  usuario_id UUID NOT NULL REFERENCES usuarios(id) ON DELETE CASCADE,
  trilha_id UUID NOT NULL REFERENCES trilhas_aprendizagem(id) ON DELETE CASCADE,
  status VARCHAR(30) DEFAULT 'ativa',
  inscrito_em TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE progresso_cursos (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  usuario_id UUID NOT NULL REFERENCES usuarios(id) ON DELETE CASCADE,
  curso_id UUID NOT NULL REFERENCES cursos(id) ON DELETE CASCADE,
  percentual_progresso NUMERIC(5,2) DEFAULT 0,
  concluido BOOLEAN DEFAULT false,
  atualizado_em TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE (usuario_id, curso_id)
);

CREATE TABLE certificados (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  usuario_id UUID NOT NULL REFERENCES usuarios(id) ON DELETE CASCADE,
  curso_id UUID NOT NULL REFERENCES cursos(id) ON DELETE CASCADE,
  emitido_em TIMESTAMPTZ DEFAULT NOW(),
  codigo_certificado VARCHAR(100) UNIQUE NOT NULL
);

CREATE TABLE conquistas (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  nome VARCHAR(150) NOT NULL,
  descricao TEXT,
  criado_em TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE usuarios_conquistas (
  usuario_id UUID NOT NULL REFERENCES usuarios(id) ON DELETE CASCADE,
  conquista_id UUID NOT NULL REFERENCES conquistas(id) ON DELETE CASCADE,
  desbloqueado_em TIMESTAMPTZ DEFAULT NOW(),
  PRIMARY KEY (usuario_id, conquista_id)
);

ALTER TABLE usuarios
  ADD CONSTRAINT fk_usuarios_empresa
  FOREIGN KEY (empresa_id) REFERENCES empresas(id);

CREATE INDEX idx_usuarios_email ON usuarios(email);
CREATE INDEX idx_usuarios_empresa_id ON usuarios(empresa_id);
CREATE INDEX idx_trilhas_aprendizagem_empresa_id ON trilhas_aprendizagem(empresa_id);
CREATE INDEX idx_cursos_categoria_id ON cursos(categoria_id);
CREATE INDEX idx_inscricoes_usuario_id ON inscricoes(usuario_id);
CREATE INDEX idx_progresso_cursos_usuario_id ON progresso_cursos(usuario_id);
CREATE INDEX idx_certificados_usuario_id ON certificados(usuario_id);

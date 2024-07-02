SELECT DISTINCT
                    1 ordem,
                    a.cd_estabelecimento,
                    a.nr_sequencia,
                    a.nr_seq_agenda,
                    --to_date(tasy.obter_dt_agenda_autor(a.nr_sequencia),'dd/mm/yyyy') dt_agenda,
                    NULL dt_agenda,
                    NULL dt_agendamento,
                    a.nr_atendimento,
                    a.dt_envio,
                    a.cd_senha,
                    NULL cd_protocolo,
                    TO_CHAR (h.cd_procedimento_tuss) cd_procedimento,
                    tasy.obter_desc_prescr_proc (h.cd_procedimento,
                                                 h.ie_origem_proced,
                                                 h.nr_seq_proc_interno)
                       ds_procedimento,
                    h.qt_solicitada qt_procedimento,
                    J.QT_IDADE,
                    J.NR_CICLOS,
                    J.NR_INTERVALO_CICLO,
                    J.QT_IDADE,
                    J.QT_PESO,
                    J.QT_ALTURA,
                    J.QT_SUPERFICIE_CORPORAL,
                    J.DS_OBSERVACAO,
                    J.NR_TELEFONE_CONTRAT,
                    J.DS_EMAIL_CONTRAT,
                    l.CD_ESTADIAMENTO_TUMOR,
                    l.DS_DIAG_HISTOPATOLOGICO,
                    l.nr_seq_guia,
                    l.ds_plano_terapeutico,
                    --l.ds_info_relevantes,
                    --l.DT_REALIZACAO_CIRURGIA,
                    --1 qt_procedimento,
                    NVL (
                       tasy.obter_dados_autor_convenio (a.nr_sequencia, 'CU'),
                       (SELECT MAX (act.cd_usuario_convenio)
                          FROM tasy.autorizacao_convenio_tiss act
                         WHERE act.nr_sequencia_autor = a.nr_sequencia))
                       cd_usuario_convenio,
                    --'1111111111' cd_usuario_convenio,
                    NVL (
                       tasy.obter_nome_pf_pj (a.cd_pessoa_fisica, NULL),
                       NVL (
                          NVL (
                             tasy.obter_pessoa_atendimento (a.nr_atendimento,
                                                            'N'),
                             NVL (
                                tasy.obter_nome_paciente_agenda (
                                   a.nr_seq_agenda),
                                NVL (
                                   tasy.obter_paciente_agenda_consulta (
                                      a.nr_seq_agenda_consulta),
                                   tasy.obter_paciente_autor_onc (
                                      a.nr_seq_paciente_setor)))),
                          tasy.obter_paciente_gestao_vagas (a.nr_seq_gestao,
                                                            'N')))
                       nm_paciente,
                    NVL (tasy.tiss_obter_cbos_medico (
                            a.cd_medico_solicitante,
                            tasy.obter_especialidade_medico (
                               a.cd_medico_solicitante,
                               'C'),
                            tasy.tiss_obter_versao (a.cd_convenio, 1, SYSDATE),
                            a.cd_convenio),
                         '999999')
                       cod_desc_cbo,
                    h.ds_observacao ds_indicacao,
                    tasy.obter_valor_dominio (1800, a.ie_tipo_internacao_tiss)
                       ds_tipo_internacao,
                    tasy.obter_valor_dominio (1757, a.ie_regime_internacao)
                       ds_regime_internacao,
                    tasy.obter_desc_tipo_acomod (a.cd_tipo_acomodacao)
                       ds_tipo_acomodacao,
                    d.cd_ans,
                    TRUNC (a.dt_inicio_vigencia) dt_inicio_vigencia,
                    TRUNC (a.dt_fim_vigencia) dt_fim_vigencia,
                    tasy.obter_tipo_atend_autor (a.nr_atendimento,
                                                 a.nr_seq_agenda,
                                                 a.nr_seq_agenda_consulta,
                                                 a.nr_seq_age_integ,
                                                 a.nr_seq_paciente_setor,
                                                 'D')
                       ds_tipo_atendimento,
                    a.ie_tipo_autorizacao,
                    g.ie_tipo_atendimento,
                    NULL ie_diaria,
                    a.qt_dia_solicitado,
                    TRUNC (a.dt_entrada_prevista) dt_entrada_prevista,
                    NULL cd_cid,
                    NULL tp_overmind,
                    b.nm_guerra nm_medico_solicitante,
                    b.nr_crm,
                    b.uf_crm,
                    NULL nr_credenciado,
                    tasy.obter_conselho_profissional (e.nr_seq_conselho, 'S')
                       ds_conselho,
                    NULL ds_anexo_guia,
                    NULL cd_anvisa,
                    NULL cd_fabricante,
                    DECODE (a.ie_carater_int_tiss, 'E', 'Eletiva')
                       carater_internacao
               FROM tasy.autorizacao_convenio a,
                    tasy.medico b,
                    tasy.convenio c,
                    tasy.pessoa_juridica d,
                    tasy.pessoa_fisica e,
                    --tasy.agenda_paciente f,
                    tasy.atendimento_paciente g,
                    tasy.procedimento_autorizado h,
                    --tasy.overmind_aux_log_pre o
                    tasy.TISS_ANEXO_GUIA J, -- incluido elder - tabela tiss-autor-anexo-diag
                    tasy.w_tiss_solicitacao l
              WHERE 1 = 1
                    AND a.cd_medico_solicitante = b.cd_pessoa_fisica
                    AND b.cd_pessoa_fisica = e.cd_pessoa_fisica
                    AND a.cd_convenio = c.cd_convenio
                    AND c.cd_cgc = d.cd_cgc
                    --AND a.nr_seq_agenda = f.nr_sequencia
                    AND a.nr_atendimento = g.nr_atendimento(+)
                    AND h.nr_sequencia_autor = a.nr_sequencia
                    AND (a.dt_ATUALIZACAO >= TRUNC (SYSDATE - 150))
                    --AND a.nr_Sequencia IN (731501)
                    AND A.CD_CONVENIO IN (5)
                    AND a.ie_tipo_autorizacao IN (1, 3, 5)        --Internação
                    --AND a.ie_tipo_guia in ('I') --Internação
                    AND a.cd_estabelecimento IN (1)
                    AND J.nr_sequencia = a.nr_sequencia -- incluido elder
                    AND l.nr_seq_guia = nr_seq_guia
                    AND l.CD_ESTADIAMENTO_TUMOR = CD_ESTADIAMENTO_TUMOR
                    AND l.DS_DIAG_HISTOPATOLOGICO = DS_DIAG_HISTOPATOLOGICO
                    AND l.ds_plano_terapeutico = ds_plano_terapeutico
                    --AND l.ds_info_relevantes = ds_info_relevantes
                    --AND l.DT_REALIZACAO_CIRURGIA = DT_REALIZACAO_CIRURGIA             
                    --AND a.ie_carater_int_tiss IN ('E')               --Eletiva
                    --AND a.nr_seq_estagio = 120 /* Enviar para automação */
                    --AND a.nr_sequencia = o.cd_guia(+)
                    --AND NVL (o.tp_overmind, 'X') NOT IN ('S', 'N')
                    --AND NVL (O.DS_TIPO_OPERACAO, 'INTELET') = 'INTELET' /* Blindagem do módulo */
                    --AND EXISTS (SELECT '1' FROM tasy.material_autorizado auth WHERE auth.nr_sequencia_autor = a.nr_sequencia)
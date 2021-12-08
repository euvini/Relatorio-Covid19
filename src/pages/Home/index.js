import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Header, Menu, Button, Content, Title, Cards } from "./styles";
import Logo from "../../assets/logo-covid.png";


export default function Home() {

    return (
        <Container>
            <Header><img src={Logo} /></Header>
            <div className="body">
                <Menu>
                    <Link to="/">
                        <Button>Início</Button>
                    </Link>
                </Menu>
                <div className="data">
                    <h1>COVID-19</h1>
                    <span>Boletins informativos e casos do coronavírus por município por dia</span>
                    <Content>
                        <Title>Relatório de casos</Title>
                        <div>
                            <form className="UF">
                                <label>UF</label>
                                <select name="uf">
                                    <option value="Todos">Todos</option>
                                    <option value="AC">Acre</option>
                                    <option value="AL">Alagoas</option>
                                    <option value="AP">Amapá</option>
                                    <option value="BA">Bahia</option>
                                    <option value="CE">Ceará</option>
                                    <option value="DF">Distrito Federal</option>
                                    <option value="ES">Espírito Santo</option>
                                    <option value="GO">Goiás</option>
                                    <option value="MA">Maranhão</option>
                                    <option value="MG">Minas Gerais</option>
                                    <option value="MS">Mato Grosso do Sul</option>
                                    <option value="MT">Mato Grosso</option>
                                    <option value="PA">Pará</option>
                                    <option value="PB">Paraíba</option>
                                    <option value="PE">Pernambuco</option>
                                    <option value="PI">Piauí</option>
                                    <option value="PR">Paraná</option>
                                    <option value="RJ">Rio de Janeiro</option>
                                    <option value="RN">Rio Grande do Norte</option>
                                    <option value="RO">Rondônia</option>
                                    <option value="RR">Roraima</option>
                                    <option value="RS">Rio Grande do Sul</option>
                                    <option value="SC">Santa Catarina</option>
                                    <option value="SE">Sergipe</option>
                                    <option value="SP">São Paulo</option>
                                    <option value="TO">Tocantins</option>
                                </select>
                            </form>
                            <form className="date">
                                <label>Data</label>
                                <input />
                            </form>
                        </div>
                        <button type="button" >Mostrar dados</button>
                    </Content>

                    <Cards>
                        <h3>Distribuição de casos de COVID-19</h3>

                        <ul>
                            <li>
                                <strong>Cidade 1 - X casos</strong>
                            </li>
                            <li>
                                <strong>Cidade 2 - X casos</strong>
                            </li>
                            <li>
                                <strong>Cidade 3 - X casos</strong>
                            </li>
                        </ul>
                    </Cards>
                </div>
            </div>
        </Container >
    )
}
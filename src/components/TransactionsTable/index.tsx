import { Container } from './styles';

export function TransactionTable() {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoría</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Desenvolvimento de website</td>
            <td className="deposit">R$12.000</td>
            <td>Desenvolvimento</td>
            <td>12/07/2021</td>
          </tr>
          <tr>
            <td>Alugel</td>
            <td className="withdraw">R$1.100</td>
            <td>Casa</td>
            <td>24/07/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
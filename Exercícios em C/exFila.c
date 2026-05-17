// Bibliotecas

#include <stdio.h>
#include <stdlib.h>
#include <locale.h>

//Constantes

#define tamanho 5

//Estrutura da Fila

struct tfila{
    int dado[tamanho];
    int ini;
    int fim;
};

//Variáveis globais

struct tfila fila;
int op;

//Prototipação

void fila_entrar();
void fila_sair();
void fila_mostrar();
void menu_mostrar();

//Função principal

int main(){
    setlocale(LC_ALL,"portuguese");
    op = 1;
    fila.ini = 0;
    fila.fim = 0;
    while(op != 0){
        system("cls");
        fila_mostrar();
        menu_mostrar();
        scanf("%d", &op);
        switch (op){
            case 1:
            fila_entrar();
            break;
            case 2:
            fila_sair();
            break;
        }
    }
    return(0);
}

//Adicionar um elemento no final da fila

void fila_entrar(){
    if(fila.fim == tamanho){
        printf("\nAfila está cheia, volte outro dia!\n\n");
        system("pause");
    }
    else{
        printf("\nDigite o valor a ser inserido:");
        scanf("%d", &fila.dado[fila.fim]);
        fila.fim++;
    }
}

//Retirar o primeiro elemento da fila

void fila_sair(){
    if(fila.ini == fila.fim){
        printf("\nFila vazia, mas logo aparece alguém!\n\n");
        system("pause");
    }
    else{
        int i;
        for(i = 0; i < tamanho; i++){
            fila.dado[i] = fila.dado[i+1];
        }
        fila.dado[fila.fim] = 0;
        fila.fim--;
    }
}

//Mostrar o conteúdo da fila

void fila_mostrar(){
    int i;
    printf("[");
    for (i = 0; i < tamanho; i++) {
        printf("%d", fila.dado[i]);
    }
    printf("]\n\n");
}

//Mostrar menu de opções

void menu_mostrar(){
    printf("\nEscolha uma opção:\n");
    printf("1 - Incluir na fila\n");
    printf("2 - Excluir da fila\n");
    printf("0 - Sair\n\n");
}
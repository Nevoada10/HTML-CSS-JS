

int main(void) {

    int l[] = {43, 91, 13, 67, 25, 59, 85, 39, 76, 11};

    for (int i = 0; i < 10; i = i + 1)
    {
        for (int j = i + 1; j < 10; j = j+ 1)
        {
            if (l[i] > l[j])
            {
                int temp = l[i];
                l[i] = l[j];
                l[j] = temp;
            }
        }
    }

    for (int i = 0; i < 10; i = i + 1)
    {
        printf("%d\n", l[i]);
    }

    return 0;
}